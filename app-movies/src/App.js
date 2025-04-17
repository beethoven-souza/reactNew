import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Banner from "./components/Banner/Index";
import Container from "./components/Container/Index";

function App() {
  return (
    <>
      <Header></Header>
      <Banner image="home"/>

      <Container>
      <h1>Hello World!!</h1>
      <p>Olá mundo! Estou prendendo React.</p>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
