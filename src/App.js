import { Component } from "react";
import "./App.css";
import HighestList from "./components/HighestList";
import Index from "./components/Index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "split",
      selected_location: "homeplus",
      near: ["korea", "china", "etc"],
      homeplus: ["korea", "japan", "china", "fastfood", "cafe", "etc"],
    };
  }
  render() {
    console.log("App render");
    if (this.state.mode === "split") {
      return (
        <div className="App">
          <Index
            goHighestListN={function () {
              this.setState({
                mode: "HighestList",
                selected_location: "near",
              });
            }.bind(this)}
            goHighestListH={function () {
              this.setState({
                mode: "HighestList",
                selected_location: "homeplus",
              });
            }.bind(this)}
          ></Index>
        </div>
      );
    } else if (this.state.mode === "HighestList") {
      return this.state.selected_location === "near" ? (
        <HighestList
          goHome={function () {
            this.setState({
              mode: "split",
            });
          }.bind(this)}
          which={this.state.selected_location}
          near={this.state.near}
        ></HighestList>
      ) : (
        <HighestList
          goHome={function () {
            this.setState({
              mode: "split",
            });
          }.bind(this)}
          which={this.state.selected_location}
          homeplus={this.state.homeplus}
        ></HighestList>
      );
    }
  }
}

export default App;
