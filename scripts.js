const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const result = document.querySelector(".result-div");
const calcButton = document.querySelector("button");
const imcResultArray = document.querySelectorAll(".result-test");
let imcResult = [];

calcButton.addEventListener('click', (event) => {
    event.preventDefault();
    const weightValue = +weight.value;
    const heightValue = +height.value;    
    
    let imcBody = weightValue / heightValue**2;
    let imcIndexArray;
    
    for(let i = 0; i < imcResultArray.length; i++ ) {        
        imcResult.push(imcResultArray[i].textContent);
    }

    if (imcBody > 10 && imcBody <= 18.5) {      
        imcIndexArray = 0;
    } else if (imcBody >= 18.5 && imcBody < 24.9) { 
        imcIndexArray = 1;
    } else if (imcBody >= 25 && imcBody <= 29.9) {
        imcIndexArray = 2;            
    } else if (imcBody >= 30 && imcBody <= 34.9) {
        imcIndexArray = 3;
    } else if (imcBody >= 35 && imcBody <= 39.9) {
        imcIndexArray = 4;
    } else if (imcBody > 40 && imcBody <= 90) {
        imcIndexArray = 5;
    } else {
        result.textContent = "Por favor, digite peso e altura válidos!";
    }      
    result.style.display = 'flex';
    result.textContent = `Seu imc é de ${imcBody.toFixed(2)} você está ${imcResult[imcIndexArray].toLocaleLowerCase()}`;   
});   
