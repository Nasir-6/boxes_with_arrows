import { useEffect } from "react";
import "./App.css";

function App() {
  // let resize;
  // window.addEventListener("resize", function () {
  //   // clearTimeout(resize);
  //   // resize = setTimeout(function () {
  //     drawArrow();
  //   // }, 100);
  // });


  const drawArrowFunction = (startId, endId) => {
    // take in start and end and make it grab those - this is an event listener so possibly can pass in divs as parameters 
    // ? But does it update the position! - YES IT DOES - as long as when the initial is created it is set!
    console.log("Testing new arrow function")
    let divStart = document.getElementById(`divStart-${startId}`);
    let divEnd = document.getElementById("end");


    let newArrow = <path id={`arrow-${1}`} />
    console.log('newArrow', newArrow)
    let arrow = document.getElementById(`arrow-${startId}`);
    console.log("divStart", divStart);
    console.log("divStart.offsetWidth", divStart.offsetWidth);

    let posnStartBottom = {
      x: divStart.offsetLeft + divStart.offsetWidth / 2,
      y: divStart.offsetTop + divStart.offsetHeight
      
    };

    let posnEndTop = {
      x: divEnd.offsetLeft + divEnd.offsetWidth / 2,
      y: divEnd.offsetTop 
    };

    // No space between letters and next coordinates
    // But always space after y coordinat so Mx1,y1 x2,y2 x3,y3 x4,y4 So on!!
    let newPath = `M${posnStartBottom.x},${posnStartBottom.y} Q${posnStartBottom.x},${
      (posnStartBottom.y + posnEndTop.y) / 2
    } ${(posnStartBottom.x + posnEndTop.x) / 2},${
      (posnStartBottom.y + posnEndTop.y) / 2
    } Q${posnEndTop.x},${(posnStartBottom.y + posnEndTop.y) / 2} ${
      posnEndTop.x
    },${posnEndTop.y + (posnStartBottom.y - posnEndTop.y)* 0.125}`;

    // console.log("newPath", newPath);
    arrow.setAttribute("d", newPath);
  };

  const preReqArr = [1,2,3,4,5,6]
  const preReqCards = preReqArr.map((id) => {
    return <div className="preReq-card" id={`divStart-${id}`}>
      <p className="preReq-text">{`Card ${id} - lorem ajnsfdk aoksjdas kosajdklaj`}</p>
      <button>KS1</button>
      </div>
  })

  const preReqArrows = preReqArr.map((id) => {
    // console.log('Making arrows')
    // drawArrowFunction(id);
    return <path id={`arrow-${id}`} markerEnd="url(#arrowhead)" />
  })

  // console.log('preReqArrows', preReqArrows)
  useEffect(()=>{
    preReqArr.forEach((id) => {
      let divStart = document.getElementById(`divStart-${id}`)
      let arrow = document.getElementById(`arrow-${id}`)
      console.log('divStart', divStart)
      console.log('arrow', arrow)
      drawArrowFunction(id)
      new ResizeObserver(() => drawArrowFunction(id)).observe(divStart)
    })

  },[])



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
            {/* Insert a mapped version of the cards here */}
            {preReqCards}
            {/* <div id="start" className="preReq-card">
              Card 1 END
            </div> */}
          </div>

          <div id="end" className="learningObj-card">
            <p>
              This is a long learning objective, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo earum recusandae.
            </p>
          </div>

          <div className="preReqCards">
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
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            >
              {preReqArrows}
              <path id="arrow" />
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default App;
