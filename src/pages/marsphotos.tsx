import React from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import MarsPhotoCard from "../containers/marsphoto-card";

/** GraphQL query to fetch all Mars photos */
export const MARSPHOTOS = gql(`
  query GetMarsPhotos {
    marsPhotos {
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
  const { loading, error, data } = useQuery(MARSPHOTOS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.marsPhotos?.length ? (
          data.marsPhotos.map((marsPhoto) => (
            <MarsPhotoCard key={marsPhoto.id} marsPhoto={marsPhoto} />
          ))
        ) : (
          <p>No Mars photos available.</p>
        )}
      </QueryResult>
    </Layout>
  );
};

export default MarsPhotos;
