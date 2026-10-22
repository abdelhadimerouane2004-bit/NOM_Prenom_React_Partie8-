import React from "react";
import Message from "./Message";
import CompteurVisites from "./CompteurVisites";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message/>
        <CompteurVisites/>
      </div>
    );
  }
}
export default App;
