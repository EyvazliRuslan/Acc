"use strict"

const AddUserBtn = document.getElementsByClassName("my-btn")[0];
const UserInput = document.getElementById("text");
const MyUserList = document.getElementsByClassName("user-list")[0];
const CleanUserBtn = document.getElementsByClassName("clean-btn")[0];
const SelectedUserBtn = document.getElementsByClassName("select-btn")[0];

AddUserBtn.addEventListener("click", function(){
    AddNewUser();
});

CleanUserBtn.addEventListener("click",function(){
    MyUserList.innerHTML = "";
})
SelectedUserBtn.addEventListener("click",function(){
    [...document.querySelectorAll(".list-group-item.list-group-item-warning")].forEach(function(link){

        link.remove();
    })

})
function AddNewUser(){
    if(UserInput.value !== ""){
            let UserInputValue = UserInput.value;
            let NewUserList = document.createElement("li");
            NewUserList.classList.add("list-group-item","list-group-item-info");
            NewUserList.addEventListener("click",function(){
            SelectedUserBtn.classList.add("d-block")
            this.classList.toggle("list-group-item-warning")
            if(document.querySelectorAll(".list-group-item.list-group-item-warning").length  == 0 ){
            SelectedUserBtn.classList.remove("d-block")
            }
        })
       
        NewUserList.innerText = UserInputValue;
        MyUserList.appendChild(NewUserList);
        UserInput.value = "";
    }
    else{
        alert("Plesa Fill input")
    }
}


UserInput.addEventListener("keydown" , function(e){
    if(e.keyCode == 13){
        AddNewUser();
    }
})
