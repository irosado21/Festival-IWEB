/*DATOS*/

var Groups = [["Twenty_One_Pilots", "10:00", "163"],
              ["Imagine-Dragons", "16:00", "35"]]

var lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a ipsum, temporibus eligendi ab nostrum architecto cum totam libero deleniti labore nesciunt modi voluptatum sed ipsam dignissimos praesentium quo tempore."

/* FIN DATOS */

/* INICIO GENERADOR */

window.addEventListener('DOMContentLoaded', (event) => {

    Groups.forEach(function (element,i) {
        
        document.getElementById("content").innerHTML += "<div class='content_x' data-group='" + element[0] + "'>"
                                                     +      "<div class='group'>"
                                                     +          "<img src='/img/Grupos/" + element[0] + ".png' alt='Imagen del Grupo'>"
                                                     +          "<button class='myBtn' onclick='showInfo(`" + Groups.indexOf(element) + "`)'>ENTRADAS</button>"
                                                     +          "<p>" + lorem + "</p>"
                                                     +      "</div>"
                                                     +      "<div class='timeGroup'>"
                                                     +      "Show Info"    
                                                     +      "</div>"
                                                     +  "</div>"

  });

})

/* INICIO GENERADOR FIN */

/* NAVBAR */
function pop() {
  if (document.getElementById("navbar2").style.display=="block") {
      document.getElementById("navbar2").style.display="none";
  }else{
      document.getElementById("navbar2").style.display="block";
      document.getElementById("navbar").style.borderRadius=0;
  }   
}
/* NAVBAR FIN */

function showInfo(group){
  /*
  Array.from(document.getElementById("content").children).forEach(element => {
    if (element.dataset.group == group) {
      //Esta ubicado en su grupo
      if (document.getElementById("hiddenInfo") !== null) {
        console.log(1);
        document.getElementById("hiddenInfo").parentNode.removeChild(document.getElementById("hiddenInfo"));
      } else {
        element.innerHTML += "<div id='hiddenInfo'>"
                          +  "<h2>Horario: </h2>"
                          +  "</div>"
      }  

      


    }
  });
  */
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function showInfo(x){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("titlemodal").innerHTML=Groups[x][0];
  document.getElementById("horariomodal").innerHTML="El concierto comenzara a las "+Groups[x][1];
  document.getElementById("entradasmodal").innerHTML="Entradas disponiles: "+Groups[x][2];
}

// When the user clicks on <span> (x), close the modal
function cerrar() {
  document.getElementById("myModal").style.display = "none";
}


