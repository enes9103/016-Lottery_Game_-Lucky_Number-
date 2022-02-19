//Selectors

let giveNumber = document.querySelector(".giveNumber");
let sendButton = document.querySelector(".sendButton");
let numberList = document.querySelector(".numberList");

//Events / Functions

sendButton.addEventListener("click", ()=>{
    if (Number(giveNumber.value) < 9) {
        for(let i = 1; i <= Number(giveNumber.value); i++){
            let newArr = [];

            let createInput = numberList.appendChild(document.createElement("input"));
            createInput.classList.add("input1");
            
            //first 6 number
            let randomNumber = `${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)} - ${Math.ceil(Math.random()*90)}`;
            randomNumberSplit = randomNumber.split(" - ")
            newArr.push(Number(randomNumberSplit[0]), Number(randomNumberSplit[1]), Number(randomNumberSplit[2]), Number(randomNumberSplit[3]), Number(randomNumberSplit[4]), Number(randomNumberSplit[5]), Number(randomNumberSplit[6]))
            newArr.sort(function(a, b){return a - b});        

            //joker number
            let jokerNumber = `${Math.ceil(Math.random()*90)}`
            if (jokerNumber.includes(newArr)){
                let jokerNumber = `${Math.ceil(Math.random()*90)}`
                newArr.push(Number(jokerNumber));
            }else{
                newArr.push(Number(jokerNumber));
            }

            //superstar number
            let superstarNumber = `${Math.ceil(Math.random()*90)}`
            newArr.push(Number(superstarNumber));

            createInput.value = `${newArr[0]} - ${newArr[1]} - ${newArr[2]} - ${newArr[3]} - ${newArr[4]} - ${newArr[5]} - ${newArr[6]} | ${newArr[7]} | ${newArr[8]}`
        }
    }else{
        // let createText = numberList.appendChild(document.createElement("h2"));
        // createText.classList.add("createText");
        // createText.innerText = "You must enter a maximum of 8 numbers!!!"

        alert ("You must enter a maximum of 8 numbers!!!")
    }

});

giveNumber.addEventListener('mouseover',() => {
    window.location.reload(false);
});
