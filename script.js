const tiles = Array.from(document.getElementsByClassName('tiles'));
const tilesContent = Array.from(document.getElementsByClassName('tiles-content'));
function tileSelection (event) {
    if(!event.target.classList.contains("active-tile") && event.target.classList.contains("tiles")) {
        tiles.forEach(e => e.classList.remove("active-tile"));
        event.target.classList.add("active-tile")
        tilesContent.forEach( ele => {
            ele.classList.remove("tiles-content-active");
            if(ele.getAttribute("data-display") == event.target.innerText) {
                ele.classList.add("tiles-content-active")
            }
           
        })
    }  
}
// Try edit me
let inputObj = {
  frames: [
    {
      first: 5,
      second: 4
    },
    {
      first: 10,
      second: 0
    },
    {
      first: 0,
      second: 10
    }
  ]
};
function calculateScore(args) {
  let totalScore = 0;
  let dummyScore = {
    first: 0,
    second: 0,
    status: "Open",
    bonus: 0
  };
  let frames = [dummyScore, ...args.frames];
  for (let i = 0; i <= frames.length - 1; i++) {
    if (frames[i].first === 10) {
      frames[i].score = frames[i].first + frames[i].second;
      frames[i].status = "Strike";
      totalScore = totalScore + frames[i].score + frames[i - 1].bonus;
    } else if (frames[i].first + frames[i.second === 10]) {
      frames[i].score = frames[i].first;
      frames[i].status = "Spare";
      totalScore = totalScore + frames[i].score + frames[i - 1].bonus;
    } else {
      frames[i].score = frames[i].first + frames[i].second;
      frames[i].status = "Open";
      totalScore = totalScore + frames[i].score + frames[i - 1].bonus;
    }
  }
}
console.log(calculateScore(inputObj));


