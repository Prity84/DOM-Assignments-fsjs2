const mainLanguage = document.querySelector(".main__languages");

const languageLink = mainLanguage.querySelectorAll("a");

const FormButton = document.querySelector("#btn");
const paracon = document.querySelector("#paracontainer");

languageLink.forEach(function (links) {
  if (links.textContent.includes("2.0")) {
    links.parentNode.removeChild(links);
  }
});

FormButton.addEventListener("click", function (e) {
  e.preventDefault();
  const p = document.createElement("p");
  p.classList = "para";
  p.textContent = "After writing the text submit the form";
  paracontainer.appendChild(p);
  
});
