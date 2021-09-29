/*DATOS*/

var Groups = [["Twenty_One_Pilots", "10:00"],
              ["Metallica", "10:00"]]

var lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a ipsum, temporibus eligendi ab nostrum architecto cum totam libero deleniti labore nesciunt modi voluptatum sed ipsam dignissimos praesentium quo tempore."

/* FIN DATOS */

window.addEventListener('DOMContentLoaded', (event) => {

    Groups.forEach(function (element,i) {
        
        document.getElementById("content").innerHTML += "<div class='content_x'>"
                                                     +      "<div class='group'>"
                                                     +          "<img src='/img/Grupos/" + element[0] + ".png' alt='Imagen del Grupo'>"
                                                     +          "<p>" + lorem + "</p>"
                                                     +      "</div>"
                                                     +      "<div class='timeGroup'>"
                                                     +          element[1]
                                                     +      "</div>"
                                                     +  "</div>"

       
        // document.getElementById("Content").closest.img.src = "/img/Grupos/" + element + ".png"
    });

})

/*

function iniGen() {
    imgGroups.forEach(element => {
        document.getElementById("content").innerHTML += "<img src='/img/Grupos/" + element + ".png' onclick='showInfo(`" + element + "`)' >"
                                                  +  "<div class='listInfo' data-group='" + element + "' onclick=''> hola   </div>"
    })
}

function showInfo(group){
    Array.from(document.getElementsByClassName("listInfo")).forEach(element => {
        if (element.dataset.group == group) {
            element.style.display = "block";
        }
    });
}
*/


