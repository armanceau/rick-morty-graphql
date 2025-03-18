import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import CharacterDetails from "./pages/CharacterDetails.tsx";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:characterId" element={<CharacterDetails />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
