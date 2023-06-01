import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #FFFFFF;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
