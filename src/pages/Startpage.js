import Card from "../components/Card";

export default function StartPage({ characters }) {
  return characters.map((character) => (
    <Card
      character={character}
      showMoreLink={"/detail/character/" + character.id}
    />
  ));
}
