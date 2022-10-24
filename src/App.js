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


  const drawArrowFunction = (startId, endId, arrowId) => {
    // take in start and end and make it grab those - this is an event listener so possibly can pass in divs as parameters 
    // ? But does it update the position! - YES IT DOES - as long as when the initial is created it is set!
    // console.log("Testing new arrow function")
    // console.log('startId', startId)
    // console.log('endId', endId)
    // console.log('arrowId', arrowId)
    let divStart = document.getElementById(startId);
    let divEnd = document.getElementById(endId);
    let arrow = document.getElementById(arrowId);
    // console.log('divStart', divStart)
    // console.log('divEnd', divEnd)
    // console.log('arrow', arrow)
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
    },${posnEndTop.y -10}`;     // Adjust here to get arrows down straight - don't give a percentage value - otherwise varies when resizing 


    arrow.setAttribute("d", newPath);
  };

  const preReqArr = [1,2,3,4,5,6]
  const preReqCards = preReqArr.map((id) => {
    return <div className="preReq-card" id={`preReq-card-${id}`}>
      <p className="preReq-text">{`Card ${id} - lorem ajnsfdk aoksjdas kosajdklaj ashdjashd oasdo asjdoas koasjdokasjd oijasdokjas d asojd oasjdoiasjd ojjksadjkashdjkhasd sjdhaskhd kajshd kj ashkjd haskd ashkjdh askdhaskjdh `}</p>
      <button>KS1</button>
      </div>
  })

  const preReqArrows = preReqArr.map((id) => {
    return <path id={`preReq-arrow-${id}`} markerEnd="url(#arrowhead)" />
  })



  const nextStepsArr = [1,2,3,4,5,6]
  const nextStepsCards = nextStepsArr.map((id) => {
    return <div className="nextSteps-card" id={`nextSteps-card-${id}`}>
      <p className="nextSteps-text">{`Card ${id} - lorem ajnsfdk aoksjdas kosajdklaj ashdjashd oasdo asjdoas koasjdokasjd oijasdokjas d asojd oasjdoiasjd ojjksadjkashdjkhasd sjdhaskhd kajshd kj ashkjd haskd ashkjdh askdhaskjdh `}</p>
      <button>KS1</button>
      </div>
  })

  const nextStepsArrows = nextStepsArr.map((id) => {
    return <path id={`nextSteps-arrow-${id}`} markerEnd="url(#arrowhead)" />
  })

  // console.log('preReqArrows', preReqArrows)
  useEffect(()=>{
    preReqArr.forEach((id) => {

      let preReqCard = document.getElementById(`preReq-card-${id}`)
      const startId = `preReq-card-${id}`
      const endId = `learningObj`
      const arrowId = `preReq-arrow-${id}`
      drawArrowFunction(startId, endId, arrowId)
      new ResizeObserver(() => drawArrowFunction(startId, endId, arrowId)).observe(preReqCard)
    })

    nextStepsArr.forEach((id) => {
      let nextStepsCard = document.getElementById(`nextSteps-card-${id}`)
      const startId = `learningObj`
      const endId = `nextSteps-card-${id}`
      const arrowId = `nextSteps-arrow-${id}`
      drawArrowFunction(startId, endId, arrowId)
      new ResizeObserver(() => drawArrowFunction(startId, endId, arrowId)).observe(nextStepsCard)
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

          <div className="preReqCards">
            {preReqCards}
          </div>

          <div id="learningObj" className="learningObj-card">
            <p>
              This is a long learning objective, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo earum recusandae.
            </p>
            <button>GCSE</button>
          </div>

          <div className="nextStepsCards">
            {nextStepsCards}
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
              {nextStepsArrows}
              <path id="arrow" />
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default App;
