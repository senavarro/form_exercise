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
        var age = parseInt(document.querySelector("#age").value); //parseInt converts the value to an integer so we can use isNaN()

        if(name.trim() == null || name.trim().length == 0){
            document.querySelector("#error_name").innerHTML="Name field can't be empty!";
            return false;
        } //trim makes sure there is no space in front or after the input

        if(surname.trim() == null || surname.trim().length == 0){
            document.querySelector("#error_surname").innerHTML="Surname field can't be empty!";
            return false;
        }

        if(age == null || age <= 0 || isNaN(age) ){
            document.querySelector("#error_age").innerHTML="Age has to be more than 0!";
            return false;
        }

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
