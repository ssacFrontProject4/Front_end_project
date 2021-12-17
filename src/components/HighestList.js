import { Component } from "react";
import App from "../App";
import { Route, Link } from "react-router-dom";
import "../HighestList.css";
class HighestList extends Component {
  isNear() {
    if (this.props.which === "near") return true;
    else return false;
  }

  render() {
    const { which } = this.props;
    var lists = [];
    var data = this.props;
    return (
      <div>
        <header className="High">
          <a
            href="#"
            onClick={function (e) {
              e.preventDefault();
              this.props.goHome();
            }.bind(this)}
          >
            <img src={process.env.PUBLIC_URL + "/image/go_one.png"}></img>
          </a>

          {/* <Route path="/" component={App} exact={true}></Route>
        
        <Link to="/">
        <img src={process.env.PUBLIC_URL + "/image/go_one.png"}>
        </img>
        </Link> */}

          {/* <a href="/">
        <img
        src={process.env.PUBLIC_URL + "/image/go_one.png"}
        id="goHome"
        ></img>
        </a> */}

          {/* {this.isNear() && <div> near </div>}
        {!this.isNear() && <div> not near </div>} */}
        </header>

        <section>
          {which === "near" && <div></div>}
          {which !== "near" && <div></div>}
        </section>
      </div>
    );
  }
}

export default HighestList;
