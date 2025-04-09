import React from "react";
import { createRoot } from "react-dom/client";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from './context/ThemeContext';

const client = new ApolloClient({
  uri: import.meta.env.VITE_MARS_GRAPHQL_SERVER_URL, 
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Pages />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
