const jokeBtn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");

jokeBtn.addEventListener("click", generate);
document.addEventListener("DOMContentLoaded", generate);

function generate(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    joke.innerHTML = "";
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log("Ready");
        const jokeGenerated = JSON.parse(this.responseText);
        const theJoke = document.createTextNode(jokeGenerated.value);

        joke.appendChild(theJoke);
      } else {
        joke.innerHTML = "Something went wrong (Not Funny)";
      }
    }
  };

  xhr.send();
}
