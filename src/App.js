// Routing
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="bg-white h-screen">
      <Router>
      {/**TODO: Si los actions del redux hacen redirect poner dentro de Router */}
         <Routes/>
      </Router>
    </div>
  );
}

export default App;
