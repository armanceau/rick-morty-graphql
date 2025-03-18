import "./App.css";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql";
import Card from "./pages/card";

const GET_CHARACTERS = graphql(`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`);

function App() {
  const { data, error, loading, refetch } = useQuery(GET_CHARACTERS);

  if (!data || loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error!</>;
  }

  return (
    <>
      <h1>Rick & Morty API 🚀</h1>
      {data.characters?.info?.prev && (
        <button onClick={() => refetch({ page: data.characters?.info?.prev })}>
          Page précédente
        </button>
      )}
      {data.characters?.info?.next && (
        <button onClick={() => refetch({ page: data.characters?.info?.next })}>
          Page suivante
        </button>
      )}
      <>
        <div className="card-container">
          {(data.characters?.results ?? [])
            .filter((el) => el !== null)
            .map((character) => {
              return (
                <Card
                  id={character.id!}
                  name={character.name!}
                  image={character.image!}
                />
              );
            })}
        </div>
      </>
    </>
  );
}

export default App;
