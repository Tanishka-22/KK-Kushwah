let dropdown = document.querySelector(".dropdown");
let dropmeow = document.getElementById("dropmeow");

document.addEventListener("click", (e) => {
  const ddbtn = e.target.matches("[data-dropdown-button]");
  console.log(dropmeow.dataset.visible);
  if (!ddbtn) {
    dropmeow.style.display = "none";
    dropmeow.dataset.visible = "X";
  } else {
    if (dropmeow.dataset.visible == "Y") {
      dropmeow.style.display = "none";
      dropmeow.dataset.visible = "X";
    } else {
      dropmeow.style.display = "block";
      dropmeow.dataset.visible = "Y";
    }
  }
});
