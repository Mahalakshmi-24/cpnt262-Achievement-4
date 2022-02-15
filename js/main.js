const theme = document.querySelector(".container");
const form  = document.getElementById("form");
const responseElement = document.querySelector('.response');


const selectTheme = function (event) {
  event.preventDefault();
  
  const season = form.season.value;

  if (season == "select"){
    event.preventDefault();
    responseElement.textContent ="No seasons selected "; 
    return;
  }

  if (season === "summer") {
    theme.style.backgroundImage = "url(./images/summer.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent = "Summer is Vacation time";
  } 
  else if (season === "spring") {
    theme.style.backgroundImage = "url(./images/spring.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent = "Spring is a time when flowers bloom and trees begin to grow and reproduce."
  } 
  else if (season === "fall") {
    theme.style.backgroundImage = "url(./images/fall.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent =" The tree leaves changing color, the temperature grows colder"
  } 
  else if(season === "winter") {
    theme.style.backgroundImage = "url(./images/winter.jpg)";
    theme.style.backgroundSize = "cover";    
    responseElement.textContent ="Snow and frost, the trees have no leaves ";
  } 
  
}
  
  
  form.addEventListener("submit", selectTheme);


