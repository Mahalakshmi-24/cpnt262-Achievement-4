const theme = document.querySelector(".container");
const form  = document.getElementById("form");
const responseElement = document.querySelector('.response');
//console.log(name.value);

const selectTheme = function (event) {
  event.preventDefault();
  
  const season = form.season.value;
 
  //console.log(season);

  if (season == "select"){
    event.preventDefault();
    responseElement.textContent ="No seasons selected "; 
    return;
  }

  if (season === "summer") {
    theme.style.backgroundImage = "url(./images/summer.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent =  `Your favourite season is ${season}`;
  } 
  else if (season === "spring") {
    theme.style.backgroundImage = "url(./images/spring.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent = `Your favourite season is ${season}`;
  } 
  else if (season === "fall") {
    theme.style.backgroundImage = "url(./images/fall.jpg)";
    theme.style.backgroundSize = "cover";
    responseElement.textContent =`Your favourite season is ${season}`;
  } 
  else if(season === "winter") {
    theme.style.backgroundImage = "url(./images/winter.jpg)";
    theme.style.backgroundSize = "cover";    
    responseElement.textContent =`Your favourite season is ${season}`;
  } 
  
}
  
  
  form.addEventListener("submit", selectTheme);


