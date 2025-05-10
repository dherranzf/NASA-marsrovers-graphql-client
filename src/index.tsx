import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from './context/ThemeContext';
import Modal from "./components/modal";

const client = new ApolloClient({
  uri: import.meta.env.VITE_MARS_GRAPHQL_SERVER_URL, 
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);

const App = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <ApolloProvider client={client}>
          {showModal && (
            <Modal
              icon="info"
              message={
                <>
                  <p>This application is a proof of concept hosted on a free server. If the server has been inactive for a while, it may take a few minutes to start.</p>
                  <p>Please wait patiently for a few minutes to start seeing Mars photos.</p>
                  <p>Thank you for your patience!</p>
                </>
              }
              onClose={() => setShowModal(false)}
            />
          )}
          <Pages />
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(<App />);
