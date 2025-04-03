import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: "./src/api-contract/schema.graphqls", 
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql"
      }
    },
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;