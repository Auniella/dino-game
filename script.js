let homme, sauter, start, restart, obstacle, message;
window.onload = function () {
  homme = document.getElementById("perso");
  sauter = document.getElementById("sauter");
  start = document.getElementById("start");
  restart = document.getElementById("restart");
  obstacle = document.getElementById("obstacle");
  message = document.getElementById("message");

  sauter.addEventListener("click", () => {
    if (homme.classList != "saut") {
      homme.classList.add("saut");
    }

    setTimeout(() => {
      homme.classList.remove("saut");
    }, 600);
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
  setInterval(() => {
    let hommeTop = parseInt(
      window.getComputedStyle(homme).getPropertyValue("top")
    );
    let obstacleLeft = parseInt(
      window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    if (obstacleLeft < 40 && obstacleLeft > 20 && hommeTop >= 91) {
      obstacle.style.animation = "none";
      message.style.opacity = "1";
    }
  }, 1);
}
