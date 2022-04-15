import Timer from "./CountdownTimer/Timer";
import HeaderContainer from "./Header/HeaderContainer";

function App() {
  return (
    <div>
      <header class ="flex justify-center content-center">
        <HeaderContainer />
      </header>
        <Timer />
    </div>
  );
}

export default App;
