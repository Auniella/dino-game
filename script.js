let homme, sauter, start, restart, obstacle, message, isJumping;
window.onload = function () {
  homme = document.getElementById("perso");
  sauter = document.getElementById("sauter");
  start = document.getElementById("start");
  restart = document.getElementById("restart");
  obstacle = document.getElementById("obstacle");
  message = document.getElementById("message");
  isJumping = false;

  sauter.addEventListener("click", () => {
    if (homme.classList != "saut") {
      homme.classList.add("saut");
    }

    setTimeout(() => {
      isJumping = true;
      homme.classList.remove("saut");
    }, 600);
    isJumping ? (start.disabled = true) : (start.disabled = false);
  });

  start.addEventListener("click", () => {
    verification();
  });

  restart.addEventListener("click", function () {
    location.reload();
  });
};

function verification() {
  obstacle.classList.add("roule");
  isJumping ? (sauter.disabled = true) : (sauter.disabled = false);
  setInterval(() => {
    let hommeTop = parseInt(
      window.getComputedStyle(perso).getPropertyValue("top")
    );
    let obstacleLeft = parseInt(
      window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    if (hommeTop >= 9.5 && obstacleLeft <= 3.5) {
      obstacle.style.animation = "none";
      message.style.opacity = "1";
    }
  }, 1);
}
