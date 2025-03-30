import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import MarsPhotoDetail from "../components/marsphoto-detail";

/** GET_MARSPHOTO gql query to retrieve a specific mars photo by its ID */
const GET_MARSPHOTO = gql`
  query GetMarsPhoto($marsPhotoId: ID!) {
    marsPhoto(id: $marsPhotoId) {
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
  const { loading, error, data } = useQuery(GET_MARSPHOTO, {
    variables: { marsPhotoId },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <MarsPhotoDetail marsPhoto={data?.marsPhoto} />
      </QueryResult>
    </Layout>
  );
};

export default MarsPhoto;
