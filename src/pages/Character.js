import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";

export default function Character() {
  const [character, setCharacter] = useState(false);
  const params = useParams();
  const characterId = params.characterId;

  useEffect(() => {
    async function fetchCharacter(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(characterId);
    fetchCharacter("https://rickandmortyapi.com/api/character/" + characterId);
  }, []);

  return (
    <>{character ? <Card character={character} activeShowMore={true} /> : ""}</>
  );
}
