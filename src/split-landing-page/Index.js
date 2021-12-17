import { Component } from "react";

class Index extends Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="style.css" />
          <title>Split Landing Page</title>
        </head>
        <body>
          <div class="container">
            <div class="split left">
              <h1>홈플러스는 너무 멀어</h1>
              <a href="#" class="btn">
                학원 근처로 간다
              </a>
            </div>
            <div class="split right">
              <h1>뭐가 멀어</h1>
              <a href="#" class="btn">
                홈플러스 근처로 간다
              </a>
            </div>
          </div>

          <script src="script.js"></script>
        </body>
      </>
    );
  }
}

export default Index;
