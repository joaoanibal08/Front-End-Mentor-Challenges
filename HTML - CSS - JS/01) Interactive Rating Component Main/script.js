let mainContainer = document.querySelector(".main-container");
let thanksContainer = document.querySelector(".thank-you");
let submitButton = document.getElementById("submit");
let rating = document.getElementById('rating');
let rateAgain = document.getElementById('rate-again');
let rateButtons = document.querySelectorAll('.btn');

    submitButton.addEventListener("click", () => {
      thanksContainer.classList.remove("hidden");
      mainContainer.style.display = "none"
    }); 

    rateAgain.addEventListener("click", () => {
      thanksContainer.classList.add("hidden");
      mainContainer.style.display = "block"
    }); 

    rateButtons.forEach((rate) => {
      rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
      })
    })
        
    /*
        function submit(){
          thanksContainer.classList.remove("hidden");
          mainContainer.style.display = "none"
        } 

       
       function rateAgain(){
          thanksContainer.classList.add("hidden");
          mainContainer.style.display = "block";
        } 
         
        function selectBtn(){
          let number = rateButtons.innerText;
        }
       
        */
