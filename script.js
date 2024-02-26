let homme, sauter, start, restart, obstacle, message, score, updateScore;
window.onload = function () {
  homme = document.getElementById("perso");
  sauter = document.getElementById("sauter");
  start = document.getElementById("start");
  restart = document.getElementById("restart");
  obstacle = document.getElementById("obstacle");
  message = document.getElementById("message");
  score = 0;

  sauter.addEventListener("click", () => {
    if (homme.classList != "saut") {
      homme.classList.add("saut");
    }

    setTimeout(() => {
      homme.classList.remove("saut");
    }, 600);
  });

  //Flèche vers le haut pour Sauter
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      if (homme.classList != "saut") {
        homme.classList.add("saut");
      }

      setTimeout(() => {
        homme.classList.remove("saut");
      }, 600);
    }
  });

  start.addEventListener("click", () => {
    verification();
  });

  //touche Espace pour Start
  document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      verification();
    }
  });

  restart.addEventListener("click", function () {
    location.reload();
  });

  //touche Entrer pour Restart
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      location.reload();
    }
  });
};

function verification() {
  obstacle.classList.add("roule");

  updateScore = setInterval(() => {
    score += 1;
    let formattedScore = String(score).padStart(2, "0");
    document.getElementById("score").innerText = formattedScore;
  }, 2500);

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
      clearInterval(updateScore);
    }
  }, 1);
}
