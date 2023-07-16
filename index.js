/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("metersAndFeet")
let volume = document.getElementById("litersAndGallons")
let weight = document.getElementById("kgAndPounds")
let input = document.getElementById("input")
const btn = document.getElementById("btn")

const meterToFeet = 3.281 
const FeetToMeter = 0.3048
const literToGallon = 0.264
const gallonToliter = 3.785
const kilogramToPound = 2.204
const poundToGram = 453.592

btn.addEventListener("click", function(){
    if (parseInt(input.value)){
        let listenValue = input.value
    
        length.textContent = `${listenValue} meters = ${(listenValue * meterToFeet).toFixed(3)} feet | ${listenValue} feet = ${(listenValue * FeetToMeter).toFixed(3)} meters`
        
        volume.textContent = `${listenValue} liters = ${(listenValue * literToGallon).toFixed(3)} gallons | ${listenValue} gallons = ${(listenValue * gallonToliter).toFixed(3)} liters`
        
        weight.textContent = `${listenValue} kilos = ${(listenValue * kilogramToPound).toFixed(3)} pounds | ${listenValue} pounds = ${(listenValue * poundToGram).toFixed(3)} grams`
        input.value = ""
    } else {
        alert("Not a number!")
    }
     
})