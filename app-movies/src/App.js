import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Banner from "./components/Banner/Index";
import Container from "./components/Container/Index";
import Card from "./components/Card/Index";

function App() {
  return (
    <>
      <Header />

      <Banner image="home" />

      <Container>
        <h1>Hello World!!</h1>
        <Card />
      </Container>

      <Footer />
    </>
  );
}

export default App;
