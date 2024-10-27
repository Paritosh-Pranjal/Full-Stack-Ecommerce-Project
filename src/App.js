import "./App.css";
import Navigation from "./customer/components/Navigation/navigation";
import HomePage from "./customer/pages/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
