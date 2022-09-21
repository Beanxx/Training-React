// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter a={1} b={2} c={3} initialValue={5} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
