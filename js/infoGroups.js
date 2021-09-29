/*DATOS*/

var Groups = [["Twenty_One_Pilots", "10:00"],
              ["Metallica", "10:00"]]

var lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a ipsum, temporibus eligendi ab nostrum architecto cum totam libero deleniti labore nesciunt modi voluptatum sed ipsam dignissimos praesentium quo tempore."

/* FIN DATOS */

/* INICIO GENERADOR */

window.addEventListener('DOMContentLoaded', (event) => {

    Groups.forEach(function (element,i) {
        
        document.getElementById("content").innerHTML += "<div class='content_x'>"
                                                     +      "<div class='group'>"
                                                     +          "<img src='/img/Grupos/" + element[0] + ".png' alt='Imagen del Grupo'>"
                                                     +          "<button onclick='showInfo()'>Show Info</button>"
                                                     +          "<p>" + lorem + "</p>"
                                                     +      "</div>"
                                                     +      "<div class='timeGroup'>"
                                                     +          element[1]
                                                     +      "</div>"
                                                     +  "</div>"

  });

})

/* INICIO GENERADOR FIN */



