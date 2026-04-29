const bulb = document.getElementById("bulb");
const light = document.querySelector(".light");
const button = document.getElementById("loginBtn");
const message = document.getElementById("message");

/* Create Stars */

const stars = document.querySelector(".stars");

for(let i=0; i<100; i++){

  const star = document.createElement("span");

  star.style.top = Math.random()*100 + "%";
  star.style.left = Math.random()*100 + "%";

  stars.appendChild(star);
}

/* Login Button */

button.addEventListener("click", () => {

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  if(username !== "" && password !== ""){

    bulb.classList.add("on");

    light.classList.add("active");

    message.innerHTML =
    "✨ Magical Access Granted ✨";

  }else{

    bulb.classList.remove("on");

    light.classList.remove("active");

    message.innerHTML =
    "⚠ Please fill all fields";
  }
});

/* Bulb Click */

bulb.addEventListener("click", () => {

  bulb.classList.toggle("on");

  light.classList.toggle("active");

});