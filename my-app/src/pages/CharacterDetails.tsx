import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { useParams } from "react-router";
import "./CharacterDetails.css";

const GET_CHARACTER = graphql(`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
    }
  }
`);

const CharacterDetails = () => {
  const params = useParams();
  console.log(params.characterId);
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: { id: params.characterId! },
  });

  if (!data?.character || loading) {
    return <>loading</>;
  }

  const character = data.character;

  if (error) return <>error</>;
  return (
    <div>
      <h2>{character.name}</h2>
      <img className="img-detail" src={character.image ?? ""} />
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharacterDetails;
