import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { ApolloError } from "@apollo/client";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
  customErrorMessage?: string; // Add a prop for custom error messages
}

/**
 * QueryResult conditionally renders Apollo query states:
 * loading, error, or its children when data is ready.
 */
const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  customErrorMessage,
  children,
}) => {
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }

  if (error) {
    // Display the custom error message if provided, otherwise fallback to the default error message
    return <p>{customErrorMessage || `ERROR: ${error.message}`}</p>;
  }

  if (data) {
    return <>{children}</>;
  }

  return <p>No data available.</p>;
};

export default QueryResult;

/** Styles for QueryResult */
const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
