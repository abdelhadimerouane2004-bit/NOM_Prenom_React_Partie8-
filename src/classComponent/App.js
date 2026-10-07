import React from "react";
import Header from "./Header";
import Presentation from "./presentation";
import Voiture from "./Voiture";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Presentation />
        <br />
        <Voiture />
      </div>
    );
  }
}
export default App;
