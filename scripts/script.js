const num = document.querySelector("#num");
const reserve = document.querySelector(".reserv")
num.innerText=0;

//#######################################################
const nores = document.createElement('div');
nores.innerHTML = '<h1>Vous avez 0 réservations</h1>';
nores.classList.add("nores");
reserve.appendChild(nores);
//####################################################################
const form = document.createElement('form');
form.action="/checkout.html"
form.classList.add("form")
//#############################################################
const submit = document.createElement('button');
submit.type = "submit";
submit.setAttribute("type", "submit");
submit.innerHTML='<h5>Compléter la réservation</h5>';
submit.classList.add("submit");
var i = 1


function ne(i) {
    num.innerHTML="<p>"+i+"</p>";
}



$(document).ready(function(){
$('.reserver').on('click', function(s){
        if(form.children.length<=3){
            j = form.children.length;
            event.preventDefault();
            console.log(form.children.length)
            console.log(i);
            if(reserve.children.length = 2 && i === 1){
                        document.querySelector(".nores").remove();
                    }
                    let siblings = getSiblings(document.querySelector('#re'));
                    siblingText = siblings.map(e => e.innerHTML);
                    console.log(siblingText);
                    reserve.appendChild(form);
                    const newDiv = document.createElement("div");
                    newDiv.classList.add("newdiv")
                    form.appendChild(newDiv)
                    // // hna ndir text 
                    const titre = document.createElement("div");
                    titre.innerHTML = "<h5>Titre mémoire 1</h5>";
                    titre.classList.add("title");
                    newDiv.appendChild(titre);
                    const btn = document.createElement("button");
                    btn.type = "button";
                    const img = document.createElement("img")
                    img.src = "/src/Vector1.svg";
                    btn.appendChild(img);
                    btn.classList.add("btn")
                    titre.appendChild(btn);
                    num.innerHTML="<p>"+i+"</p>";
                    i+=1;
                    btn.addEventListener('click', remover);
                    //################################################################
                    const sousTitre = document.createElement("div");
                    sousTitre.innerHTML = '<h5>Disponible du 05/05/2025</h5><h4>Réserver de: 05/05/205 à 05/06/2030</h4>';
                    sousTitre.classList.add("soustitre")
                    newDiv.appendChild(sousTitre);
                    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    

                    if(form.children.length >= 0){
                        form.appendChild(submit);
                    }
        }
            
                    
})
});

function remover(e){
    form.querySelector(".newdiv").remove()
    // const item = e.target;
    // const paren = item.parentNode.parentNode.parentNode ;
    // paren.remove();
    i--;
    console.log(i)
    num.innerHTML="<p>"+(i-1)+"</p>";
    if(reserve.children.length = 2 && i === 1){
        reserve.appendChild(nores);
        num.innerHTML="<p>"+0+"</p>";
        submit.remove();
        reserve.classList.toggle('show');
    }
}


let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};



$(document).ready(function(){
    $('#panier').on('click', function(s){
        reserve.classList.toggle('show');
    })
    });