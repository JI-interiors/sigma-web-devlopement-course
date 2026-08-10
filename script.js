const nav = document.getElementById("mainNav");
const menu = document.getElementById("menuToggle");
const modal = document.getElementById("modal");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

function openModal(){
  modal.classList.add("active");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  setTimeout(()=>modal.querySelector("input")?.focus(),40);
}
function closeModal(){
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.querySelectorAll("[data-open-form]").forEach(el=>el.addEventListener("click",openModal));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
