import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URL}`, // Replace with your GraphQL API
  cache: new InMemoryCache(),
});

interface ApolloContextDTO {
  children: React.ReactNode;
}

export default function ApolloContext({ children }: ApolloContextDTO) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
