import styled from "styled-components";

export default function Card({ name, image }) {
  return (
    <CardContainer>
      <Img src={image} alt={name} />
      <CharacterName>{name}</CharacterName>
      <ShowMoreBtn>Show more</ShowMoreBtn>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 20px;
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px var(--secondary025);
`;
const Img = styled.img`
  border-radius: 0.5rem;
`;
const CharacterName = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
`;
const ShowMoreBtn = styled.button`
  background: var(--primary);
  color: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;
