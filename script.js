const banner = document.getElementsByClassName('banner');
console.log("banner",banner);
setTimeout(() => {
  banner[0].remove();
}, 3000)

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




