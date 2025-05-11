let container = document.getElementById("container");

const changeImage = () => {
  fetch("https://coffee.alexflipnote.dev/random.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let card = document.createElement("div");
      card.classList.add("card-coffee");

      let image = document.createElement("img");
      image.src = data.file;

      card.appendChild(image);
      container.appendChild(card);
    });

  
};
  setTimeout( ()=> {
    changeImage()
  }, 5000);

// setTimeout(()=>{
//     changeImage()
// },4000)

changeImage()
