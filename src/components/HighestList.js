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
    var { mode } = this.props;
    const { list } = this.props;
    var lists = [];

    for (let key in list) {
      if (key === mode) {
        list[key].forEach((arrayElement) => {
          lists.push(
            <div className="arrayList">
              <a href="">
                {" "}
                {arrayElement}
                <img
                  src={process.env.PUBLIC_URL + `/image/${arrayElement}.png`}
                ></img>
              </a>
            </div>
          );
        });
      }
    }
    return (
      <div className="Top">
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

          {/* {which === "near" && <div></div>}
          {which !== "near" && <div></div>} */}
        </header>

        <section>{lists}</section>
      </div>
    );
  }
}

export default HighestList;
