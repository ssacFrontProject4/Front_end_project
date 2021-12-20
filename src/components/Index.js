import { Component } from "react";

class Index extends Component {
  render() {
    return (
      <>
        <head>
          <title>Split Landing Page</title>
        </head>
        <body>
          <div id="index_header">오늘 뭐 먹지?</div>
          <div class="container">
            <div class="split left">
              <h1>홈플러스는 너무 멀어</h1>
              <a
                href="#"
                class="btn"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.goHighestListN();
                }.bind(this)}
              >
                학원 근처로 간다
              </a>
            </div>
            <div class="split right">
              <h1>뭐가 멀어</h1>
              <a
                href="#"
                class="btn"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.goHighestListH();
                }.bind(this)}
              >
                홈플러스 근처로 간다
              </a>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Index;
