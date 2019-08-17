'use strict'

window.addEventListener("load", ()=>{
    console.log("DOM uploaded")

    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed");
    
    box_dashed.style.display = "none"

    form.addEventListener('submit', ()=>{
        console.log("Submit event catched");

        var name = document.querySelector("#name").value;
        var surname = document.querySelector("#surname").value;
        var age = document.querySelector("#age").value;

        box_dashed.style.display = "block"

        var user_data = [name, surname, age];

        var index

        for(index in user_data){
            var paragraph = document.createElement("p"); 
            paragraph.append(user_data[index])
            box_dashed.append(paragraph);
        }
    })
})
