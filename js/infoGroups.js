/*DATOS*/

var Groups = ["Twenty_One_Pilots", "Metallica"]

/* FIN DATOS */

window.addEventListener('DOMContentLoaded', (event) => {
    
    Groups.forEach(element => {
        console.log(document.getElementById("content").closest("div").closest("img"))
       // document.getElementById("Content").closest.img.src = "/img/Grupos/" + element + ".png"
    });
    
})

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



