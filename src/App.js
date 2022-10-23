import { useEffect } from "react";
import "./App.css";

function App() {
  const drawArrow = () => {
    let divStart = document.querySelector("#start");
    let divEnd = document.querySelector("#end");

    let arrow = document.querySelector("#arrow");
    console.log("divStart", divStart);
    console.log("divStart.offsetWidth", divStart.offsetWidth);

    let posnStartTop = {
      x: divStart.offsetLeft + divStart.offsetWidth / 2,
      y: divStart.offsetTop,
    };

    let posnEndBottom = {
      x: divEnd.offsetLeft + divEnd.offsetWidth / 2,
      y: divEnd.offsetTop + divEnd.offsetHeight,
    };

    var dArr =
      "M" +
      posnStartTop.x +
      "," +
      posnStartTop.y +
      " " +
      "Q" +
      posnStartTop.x +
      "," +
      (posnStartTop.y - 10) +
      " " +
      posnEndBottom.x +
      "," +
      (posnEndBottom.y + 10) +
      " " +
      posnEndBottom.x +
      "," +
      posnEndBottom.y;

    // No space between letters and next coordinates
    // But always space after y coordinat so Mx1,y1 x2,y2 x3,y3 x4,y4 So on!!
    var dArrNew = `M${posnStartTop.x},${posnStartTop.y} Q${posnStartTop.x},${
      posnStartTop.y - 10
    } ${posnEndBottom.x},${posnEndBottom.y + 10} ${posnEndBottom.x},${
      posnEndBottom.y
    }`;

    let newPath = `M${posnStartTop.x},${posnStartTop.y} Q${posnStartTop.x},${
      (posnStartTop.y + posnEndBottom.y) / 2
    } ${(posnStartTop.x + posnEndBottom.x) / 2},${
      (posnStartTop.y + posnEndBottom.y) / 2
    } Q${posnEndBottom.x},${(posnStartTop.y + posnEndBottom.y) / 2} ${
      posnEndBottom.x
    },${posnEndBottom.y + (posnStartTop.y - posnEndBottom.y)* 0.15}`;

    console.log("dArr", dArr);
    console.log("dArrNew", dArrNew);
    console.log("newPath", newPath);
    arrow.setAttribute("d", newPath);
  };

  useEffect(() => {
    let divEnd = document.querySelector("#end");
    divEnd.addEventListener("webkitTransitionEnd", (event) => {
      console.log("Webkit transition end");
      drawArrow();
      // setTimeout(() => {drawArrow()}, 150)
      // drawArrow()
    });

    divEnd.addEventListener("transitionend", (event) => {
      console.log("Normal transitionEnd");
      drawArrow();
      // setTimeout(() => {drawArrow()}, 150)
      // drawArrow()
    });
    drawArrow();
  }, []);

  let resize;
  window.addEventListener("resize", function () {
    clearTimeout(resize);
    resize = setTimeout(function () {
      drawArrow();
    }, 100);
  });

  return (
    <div className="App">
      <p>Hello</p>
      <main className="main">
        <div className="icicle">
          <h2>Icicle</h2>
        </div>
        <div className="preReq">
          <h2>Pre Requisites</h2>

          <div className="preReqCards">
            <div id="end" className="preReq-card">
              Card 1 END
            </div>
            <div className="preReq-card">Card 2</div>
            <div className="preReq-card">Card 3</div>
            <div className="preReq-card">Card 4</div>
          </div>

          <div id="start" className="learningObj-card">
            <p>
              This is a long learning objective, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo earum recusandae.
            </p>
          </div>

          <div className="preReqCards">
            <div className="preReq-card">Card 1</div>
            <div className="preReq-card">Card 2</div>
            <div className="preReq-card">Card 3</div>
            <div className="preReq-card">Card 4 START</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="3"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" />
              </marker>
            </defs>
            <g
              fill="none"
              stroke="black"
              stroke-width="2"
              marker-end="url(#arrowhead)"
            >
              <path id="arrow" />
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default App;
