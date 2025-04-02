/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MARS_GRAPHQL_SERVER_URL: string; // Add your environment variable here
    // ...add more variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  