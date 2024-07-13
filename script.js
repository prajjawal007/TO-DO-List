let input = document.querySelector(".input");
let button = document.querySelector(".add");
let ul = document.querySelector(".list");
let li;
 function addtask () {
    if(input.value.trim()!==""){
        ul.style.display='block';
        li= document.createElement('li');
        li.textContent=input.value;
        ul.appendChild(li);
        let cross= document.createElement('span');
        cross.textContent="\u00d7";
        li.appendChild(cross);
        input.focus();
        savedata();
        input.value = "";
    }   
    else{
        alert("You must write Something!");
    }
}

ul.addEventListener("click",function (e) {
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",ul.innerHTML);
}

function getdata(){
    ul.innerHTML=localStorage.getItem("data");
}
getdata();