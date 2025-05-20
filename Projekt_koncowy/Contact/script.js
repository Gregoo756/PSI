/* ========= phone number ========= */
const phones = ["+48 123 456 789", "+48 222 111 333", "+48 555 999 777"];
const phoneEl = document.getElementById("phone");

//random phone
function getRandomPhone(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}
phoneEl.textContent = `Call us: ${getRandomPhone(phones)}`;

/* ========= Cookie ========= */
const returningMsg = document.getElementById("returningMsg");
if (document.cookie.includes("visited=true")) {
  returningMsg.textContent = "Welcome back 👋   thanks for reaching out again!";
} else {
  // cookie for 30 days
  const d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  document.cookie = "visited=true; expires=" + d.toUTCString() + "; path=/";
}

/* ========= Stickman ========= */
function drawStickman(ctx) {
    //głowa
    ctx.beginPath();
    ctx.arc(200, 50, 20, 0, Math.PI * 2, true); //200 - położenie w bok, 50 - położenie w góre/dół, 20 - wielkość, 0 - wypełnienie głowy 
    ctx.strokeStyle = 'white'; //kolor ludzika
    ctx.lineWidth = 3; //grubość lini
    ctx.stroke();
    ctx.closePath();

    // ciało
    ctx.beginPath();
    ctx.moveTo(200, 70); //długość ciała
    ctx.lineTo(200, 150); //długość ciała
    ctx.stroke();
    ctx.closePath();

    // Ręce
    ctx.beginPath();
    ctx.moveTo(200, 90); //ramię
    ctx.lineTo(150, 120); //pozycja ręki (góra dół)
    ctx.moveTo(200, 90); //ramię
    ctx.lineTo(250, 120); //pozycja ręki (góra dół)
    ctx.stroke();
    ctx.closePath();

    // nogi
    ctx.beginPath();
    ctx.moveTo(200, 150); //noga
    ctx.lineTo(150, 250); //pozycja nogi (góra dół)
    ctx.moveTo(200, 150); //noga
    ctx.lineTo(250, 250); //pozycja nogi (góra dół)
    ctx.stroke();
    ctx.closePath();
}
const canvas = document.getElementById("stickmanCanvas");
drawStickman(canvas.getContext("2d"));

// nav bar color change
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});
