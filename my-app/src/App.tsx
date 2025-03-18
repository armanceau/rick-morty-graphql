import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
  cache: new InMemoryCache(),
});

interface Character {
  id: string;
  name: string;
  image: string;
}

interface CharactersData {
  characters: {
    results: Character[];
  };
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    client
      .query<CharactersData>({
        query: gql`
          query getCharacters {
            characters {
              results {
                id
                name
                image
              }
            }
          }
        `,
      })
      .then((result) => setCharacters(result.data.characters.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Rick & Morty</h1>
      <div className="card-container">
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
