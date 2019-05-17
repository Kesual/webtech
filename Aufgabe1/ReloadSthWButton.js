let reload;

   function setTO() {
       reload = setInterval(function () {
           window.location.reload()
       }, 10000);
   }

   setTO();

   let button = document.getElementById("stop");
   button.addEventListener("click", function () {

       if (button.name === "stop") {

           window.clearInterval(reload);
           button.setAttribute("name", "start");
           button.innerText = "Start reload";
       } else {

           setTO();
           button.setAttribute("name", "stop");
           button.innerText = "Stop reload";
       }
   }); //Start stop of Reload