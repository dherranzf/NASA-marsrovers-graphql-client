import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import MarsPhotoCard from "../containers/marsphoto-card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";
import { colors } from "../styles";

/** GraphQL query to fetch all Mars photos with filters */
export const MARSPHOTOS = gql(`
  query GetMarsPhotos($sol: String, $earth_date: String) {
    marsPhotos(sol: $sol, earth_date: $earth_date) {
      id
      sol
      img_src
      rover {
        name
        landing_date
        status
      }
    }
  }
`);

const MarsPhotos = () => {
  const [filters, setFilters] = useState({ sol: "", earth_date: "" });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [photos, setPhotos] = useState<any[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { loading, error, data, refetch } = useQuery(MARSPHOTOS, {
    variables: filters,
    onCompleted: (newData) => {
      if (newData?.marsPhotos) {
        setPhotos((prevPhotos) => [...prevPhotos, ...newData.marsPhotos]);
      }
    },
  });

  useEffect(() => {
    // Set default earth_date to current date - 1
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() - 1);
    const formattedDate = defaultDate.toISOString().split("T")[0];
    setFilters({ sol: "", earth_date: formattedDate });
    setSelectedDate(defaultDate);
    refetch({ sol: "", earth_date: formattedDate });
  }, [refetch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "sol") {
      setFilters({ sol: value, earth_date: "" });
      setSelectedDate(null);
      setPhotos([]); // Reset photos
      refetch({ sol: value, earth_date: "" });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setFilters({ sol: "", earth_date: formattedDate });
      setPhotos([]); // Reset photos
      refetch({ sol: "", earth_date: formattedDate });
    } else {
      setFilters((prev) => ({ ...prev, earth_date: "" }));
      setPhotos([]); // Reset photos
      refetch({ sol: "", earth_date: "" });
    }
  };

  const loadMorePhotos = useCallback(() => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    let newFilters = { ...filters };

    if (filters.sol) {
      newFilters.sol = (parseInt(filters.sol) - 1).toString();
    } else if (filters.earth_date) {
      const currentDate = new Date(filters.earth_date);
      currentDate.setDate(currentDate.getDate() - 1);
      newFilters.earth_date = currentDate.toISOString().split("T")[0];
    }

    refetch(newFilters).finally(() => {
      setFilters(newFilters);
      setIsLoadingMore(false);
    });
  }, [filters, refetch, isLoadingMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMorePhotos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePhotos]);

  return (
    <Layout grid>
      <FilterSection>
        <form>
          <FormGroup>
            <label htmlFor="sol">Filter by Sol (Martian Day)</label>
            <input
              type="text"
              id="sol"
              name="sol"
              placeholder="Enter Sol"
              value={filters.sol}
              onChange={handleFilterChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="earth_date">Filter by Earth Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              isClearable
            />
          </FormGroup>
        </form>
      </FilterSection>
      <PhotoSection>
        <QueryResult
          error={error}
          loading={loading && photos.length === 0}
          data={data}
          customErrorMessage={
            error?.networkError?.message?.includes("Failed to fetch")
              ? "The server is currently restarting due to a long period of inactivity. A request has been sent to trigger the restart. Please wait a few minutes and try again. Thank you for your patience!"
              : error?.message
          }
        >
          {photos.length ? (
            photos.map((marsPhoto) => (
              <MarsPhotoCard
                key={marsPhoto.id}
                marsPhoto={marsPhoto}
                linkTo={`/marsphoto/${marsPhoto.id}?sol=${marsPhoto.sol}`}
              />
            ))
          ) : (
            <p>
              {filters.sol || filters.earth_date
                ? `No Mars photos available for the selected filters.`
                : `No Mars photos available.`}
            </p>
          )}
        </QueryResult>
        {isLoadingMore && <LoadingIndicator>Loading more photos...</LoadingIndicator>}
      </PhotoSection>
    </Layout>
  );
};

export default MarsPhotos;

/** Styled Components */
const FilterSection = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  marginTop: "40px",
  marginBottom: "20px",
  backgroundColor: colors.secondary,
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  form: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    width: "100%",
    alignItems: "center",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "10px",
    },
  },
});

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  label: {
    marginBottom: "5px",
    fontSize: "1em",
    color: colors.textSecondary,
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    border: `1px solid ${colors.textSecondary}`,
    borderRadius: "4px",
    width: "100%",
  },
  '@media (max-width: 768px)': {
    width: "100%",
  },
});

const PhotoSection = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "15px",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
});

const LoadingIndicator = styled.div({
  textAlign: "center",
  padding: "20px",
  fontSize: "1.2em",
  color: colors.textSecondary,
});
