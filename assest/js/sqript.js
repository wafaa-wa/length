const inputBox = document.getElementById("input1");
const resultBox = document.getElementById("result1");
const inputCategory = document.getElementById("inputCategory");
const resultCategory = document.getElementById("resultCategory");
const allClearBtn = document.querySelector("button");
console

const conversionFactors = {
    meter: {
        kilometer:0.001,
        meter:1,
        centimeter:100,
        millimeter:1000,
        micrometer:1000000,
        nanometer:1000000000,
        mile:1/1906.344,
        yard:1.09361,
        foot:3.28084,
        inch:39.3701
    },
    kilometer: {
        meter:1000,
        kilometer:1,
        centimeter:10000,
        millimeter:1000000,
        micrometer:1000000000,
        nanometer:1000000000000,
        mile:0.621371,
        yard:1093.6133,
        foot:3280.84,
        inch:39370.1
    },
    centimeter: {
        meter:0.01,
        kilometer:0.00001,
        centimeter:1,
        millimeter:10,
        micrometer:10000,
        nanometer:10000000,
        mile:1/160934,
        yard:1/91.44,
        foot:1/30.48,
        inch:1/2.54
    },
};

inputBox.addEventListener('input', updateResult);
inputCategory.addEventListener('change',updateResult);
resultCategory.addEventListener('change',updateResult);
allClearBtn.addEventListener('click',clearInput);

function updateResult(){

    const inputValue = parseFloat(inputBox.value);
    const inputCategoryVal =inputCategory.value;
    const resultCategoryVal = resultCategory.value;

    const conversionFactor = conversionFactors[inputCategoryVal][resultCategoryVal]
    resultBox.value = isNaN(inputValue) ? "" : inputValue * conversionFactor
}

function clearInput(){
    inputBox.value = " ";
    resultBox.value = " ";
}
