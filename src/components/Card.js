import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Card({
  character,
  showMoreLink,
  activeShowMore = false,
}) {
  const name = character.name;
  const image = character.image;
  const status = character.status;
  const species = character.species;
  const locationUrl = character.location.url ? character.location.url : "#";
  const locationName = character.location.name
    ? character.location.name
    : "unknown";
  const episode = character.episode;
  console.log(status);

  return (
    <CardContainer>
      <Img src={image} alt={name} />
      <CharacterName>{name}</CharacterName>
      {!activeShowMore && (
        <ShowMoreBtn to={showMoreLink}>Show more</ShowMoreBtn>
      )}
      {activeShowMore && (
        <InfoWrapper>
          <Info>
            <InfoHeadline>
              <StatusIcon
                className={"is--" + status.toLowerCase()}
              ></StatusIcon>
              <span>
                {status} - {species}
              </span>
            </InfoHeadline>
          </Info>
          <Info>
            <InfoHeadline>Last known location:</InfoHeadline>
            <InfoText>
              <a href={locationUrl} target="_blank">
                {locationName}
              </a>
            </InfoText>
          </Info>
          <Info>
            <InfoHeadline>First seen in:</InfoHeadline>
            <InfoText>
              <a href={episode[0]} target="_blank">
                Episode
                {episode[0].substring(episode[0].indexOf("episode/") + 8)}
              </a>
            </InfoText>
          </Info>
        </InfoWrapper>
      )}
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 20px;
  background: var(--card-bg);
  color: #fff;
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
`;
const ShowMoreBtn = styled(NavLink)`
  background: var(--primary);
  padding: 8px 20px;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  width: 100%;
`;
const Info = styled.div`
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid var(--primary);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
const InfoHeadline = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
`;
const InfoText = styled.p`
  a {
    color: #fff;
  }
`;
const StatusIcon = styled.i`
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 100%;

  &.is--alive {
    background: rgb(85, 204, 68);
  }
  &.is--unknown {
    background: rgb(255, 255, 255);
  }
`;
