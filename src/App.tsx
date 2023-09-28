import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Chat from "./features/Chat/Chat";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Chat />
    </div>
  );
}

export default App;
