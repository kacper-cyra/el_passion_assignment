import "./App.css";
import { Star } from "./components/Icons/Star";
import { Container } from "./Container";
import { Panel } from "./pages/Panel";

function App() {
  return (
    <div className="App">
      <Container>
        <Panel></Panel>
        <Star />
      </Container>
    </div>
  );
}

export default App;
