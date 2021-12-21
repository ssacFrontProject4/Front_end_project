import { Component } from "react";
import "./App.css";
import HighestList from "./components/HighestList";
import Index from "./components/Index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "split",
      list: {
        Ssac: ["korea", "japan", "china", "fastfood", "cafe"],
        homeplus: ["korea", "japan", "china", "fastfood", "cafe", "FoodCourt"],
      },
    };
  }
  render() {
    if (this.state.mode === "split") {
      return (
        <div className="App">
          <Index
            goHighestListN={function () {
              this.setState({
                mode: "Ssac",
              });
            }.bind(this)}
            goHighestListH={function () {
              this.setState({
                mode: "homeplus",
              });
            }.bind(this)}
          ></Index>
        </div>
      );
    } else
      return (
        <HighestList
          goHome={function () {
            this.setState({
              mode: "split",
            });
          }.bind(this)}
          mode={this.state.mode}
          list={this.state.list}
        ></HighestList>
      );
  }
}

export default App;
