/*DATOS*/

var imgGroups = ["Twenty_One_Pilots", "Metallica"]

/* FIN DATOS */

window.addEventListener('DOMContentLoaded', (event) => {
    iniGen()
    
})

function iniGen() {
    imgGroups.forEach(element => {
        document.getElementById("list").innerHTML += "<img src='/img/Grupos/" + element + ".png' onclick='showInfo(`" + element + "`)' >"
                                                  +  "<div class='listInfo' data-group='" + element + "' onclick=''> hola </div>"
    })
}

function showInfo(group){
    Array.from(document.getElementsByClassName("listInfo")).forEach(element => {
        if (element.dataset.group == group) {
            element.style.display = "block";
        }
    });
    
    
}



