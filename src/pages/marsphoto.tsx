import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import MarsPhotoDetail from "../components/marsphoto-detail";

/** GET_MARSPHOTO gql query to retrieve a specific mars photo by its ID and optional sol */
const GET_MARSPHOTO = gql`
  query GetMarsPhoto($marsPhotoId: ID!, $sol: String) {
    marsPhoto(id: $marsPhotoId, sol: $sol) {
      id
      sol
      img_src
      earth_date
      number_of_views
      camera {
        id
        name
        full_name
      }
      rover {
        id
        name
        landing_date
        launch_date
        status
      }
    }
  }
`;

/**
 * MarsPhoto Page fetches a mars photo's data from the gql query GET_MARSPHOTO
 * and provides it to the MarsPhotoDetail component to display
 */
const MarsPhoto = () => {
  const { marsPhotoId = "" } = useParams();
  const location = useLocation();
  const sol = new URLSearchParams(location.search).get("sol") || undefined;

  const { loading, error, data } = useQuery(GET_MARSPHOTO, {
    variables: { marsPhotoId, sol },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.marsPhoto && <MarsPhotoDetail marsPhoto={data.marsPhoto} />}
      </QueryResult>
    </Layout>
  );
};

export default MarsPhoto;
