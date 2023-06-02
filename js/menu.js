const btnBoton = document.getElementById("icon-menu");
const menu = document.getElementById("menu");
const infoDr = document.getElementById("infoDr")
const modalDr = document.getElementById("modalDr");
const links = document.querySelectorAll(".link");

btnBoton.addEventListener("click", () => {
  btnBoton.classList.toggle("close");
  menu.classList.toggle("menu-show");
  for(let i = 0; i < links.length; i ++){
    links[i].addEventListener('click', ()=>{
      menu.classList.remove("menu-show");
      btnBoton.classList.remove("close");
    })
  }
});

infoDr.addEventListener("click", ()=>{
  modalDr.classList.add("showInfoDr");
})

modalDr.addEventListener("click", () =>{
  modalDr.classList.remove('showInfoDr')
});

