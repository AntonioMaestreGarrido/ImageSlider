var test = document.querySelector("input");

var coleccion = [];

console.log(test.files);
const frame = document.querySelector("#frame");

document.querySelector("#sub").addEventListener("click", selectFiles);
document.querySelector("#test").addEventListener("click", fillSlide);

function timer() {
  setInterval(changeBigPicture, 5000);
}

function changeBigPicture() {
  let index = frame.querySelector("img").getAttribute("index");
  console.log(index);
  console.log(typeof index);
  index++;
  if (index == coleccion.length) {
    index = 0;
  }

  showBig(index);
  console.log(typeof index);
}

function selectFiles() {
  coleccion = [];
  for (let i = 0; i < test.files.length; i++) {
    coleccion.push(test.files[i]);
  }
}

function markSelected(index) {
  //document.querySelector(".selected").classList.toggle("selected")
  //document.querySelector("#slide").querySelector(`[index='${index}']`).classList.add("selected")
  document.querySelectorAll(".miniImg").forEach(element=>element.classList.remove("selected"))
  document
    .querySelector(`#slide > [index='${index}']`)
    .classList.add("selected");
  console.log("nice");
}
function fillSlide() {
  let slide = document.querySelector("#slide");
  coleccion.forEach((im) => {
    let fr = new FileReader();
    fr.readAsDataURL(im);
    fr.addEventListener("load", () => {
      let index = coleccion.indexOf(im);
      let newImage = document.createElement("img");
      newImage.setAttribute("index", index);
      newImage.setAttribute("src", fr.result);
      newImage.classList.add("miniImg");
      newImage.addEventListener("click", showBig);
      slide.appendChild(newImage);
    });
  });

 
  showBig(0);
  timer();
}
function showBig(e) {
  let index;
  if (typeof e === "object") {
    index = e.target.getAttribute("index");
  } else if (typeof e === "number") {
    index = e;
  }
  let imagen = document.querySelector("#imagen");
  var fr = new FileReader();

  fr.readAsDataURL(coleccion[index]);

  fr.addEventListener("load", () => {
    imagen.setAttribute("index", index);
    imagen.setAttribute("src", fr.result);
    markSelected(index);
  });
}

function ttest() {
  let imagetest = document.querySelector("[index='2']");
  imagetest.classList.remove("miniImg");

  document.querySelector("#frame").click();
  frame.click();
}

/*
function fillSlide() {
 
let slide=document.querySelector("#slide")
for (let i = 0; i < coleccion.length; i++) {
  let fr = new FileReader();
  fr.readAsDataURL(coleccion[i]);
  fr.addEventListener("load", () => {
    
    let newImage=document.createElement("img")
    newImage.setAttribute("index",i)
    newImage.setAttribute("src", fr.result);
    newImage.classList.add("miniImg")
    slide.appendChild(newImage)
    
  });

 
}
}*/
