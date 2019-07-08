import Trainer from "./trainers";

const init = function(){
    document.getElementById("submit-your-name").addEventListener("click", createTrainer);
    // document.getElementById("submit-rival-name").addEventListener("click", createTrainer);
};

const createTrainer = function(ev){
    ev.preventDefault();
    trainer1 = document.getElementById("input-your-name").value;
    document.getElementById("div-input-your-name").remove();
    trainer1 = new Trainer(trainer1);
    console.log(trainer1.starter);

};

document.addEventListener("DOMContentLoaded", init);