var test = document.querySelector("input");
var imagen = document.querySelector("#imagen");
var coleccion = [];

console.log(test.files);
document.querySelector("#sub").addEventListener("click", selectFiles);
document.querySelector("#test").addEventListener("click", agregaArchivo);
var im;

function selectFiles() {
  coleccion=[]
  for (let i = 0; i < test.files.length; i++) {
    coleccion.push(test.files[i]);
  }
}
function agregaArchivo() {
  var fr = new FileReader();
  
  fr.readAsDataURL(coleccion[1]);

  fr.addEventListener("load", () => {
    imagen.setAttribute("index", "w");
    imagen.setAttribute("src", fr.result);
    fillSlide()
  });
}

function fillSlide() {
  let slide=document.querySelector("#slide")
  for (let i = 0; i < coleccion.length; i++) {
    let newImage=document.createElement("img")
    newImage.setAttribute("index",i)
    newImage.textContent="uuh"
    newImage.classList.add("miniImg")
    slide.appendChild(newImage)

  }

  
}
