import React from "react";

import "./App.css"
import Router from "./routes/Router";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div>
     
<Router>

<LandingPage/>
</Router>
    </div>
  );
}

export default App;
