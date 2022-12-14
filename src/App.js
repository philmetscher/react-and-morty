import styled from "styled-components";
import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import Navigation from "./components/Navigation";

import StartPage from "./pages/Startpage";
import Character from "./pages/Character";

function App() {
  let { characterId } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/detail/character/:characterId"
            element={
              <CardsWrapper>
                <Character />
              </CardsWrapper>
            }
            end
          />
          <Route
            path="*"
            element={
              <CardsWrapper>
                <StartPage characters={characters} />
              </CardsWrapper>
            }
            end
          />
        </Routes>
      </Main>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 80px;
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  max-width: 1400px;
  margin: 0 auto;
`;
const CardsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 50px;
  width: 100%;
  height: 100%;
`;
const NavigationWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: var(--primary);
`;

export default App;
