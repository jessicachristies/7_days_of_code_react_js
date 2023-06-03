import Header from "./components/Header";
import styled from "styled-components";
import Newsletter from "./components/Newsletter";

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #FFFFFF;
  font-family: 'Montserrat';
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Newsletter />
    </AppContainer>
  );
}

export default App;
