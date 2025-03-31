import React, { useState } from "react";
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
  const { loading, error, data, refetch } = useQuery(MARSPHOTOS, {
    variables: filters,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Ensure only one field is filled at a time
    if (name === "sol") {
      setFilters({ sol: value, earth_date: "" });
      setSelectedDate(null); // Reset date picker
      refetch({ sol: value, earth_date: "" }); // Trigger refetch on change
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split("T")[0]; // Convert to AAAA-MM-DD
      setFilters({ sol: "", earth_date: formattedDate });
      refetch({ sol: "", earth_date: formattedDate }); // Trigger refetch on change
    } else {
      setFilters((prev) => ({ ...prev, earth_date: "" }));
      refetch({ sol: "", earth_date: "" }); // Trigger refetch on clear
    }
  };

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
        <QueryResult error={error} loading={loading} data={data}>
          {data?.marsPhotos?.length ? (
            data.marsPhotos.map((marsPhoto) => (
              <MarsPhotoCard
                key={marsPhoto.id}
                marsPhoto={marsPhoto}
                linkTo={`/marsphoto/${marsPhoto.id}?sol=${marsPhoto.sol}`}
              />
            ))
          ) : (
            <p>No Mars photos available.</p>
          )}
        </QueryResult>
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
