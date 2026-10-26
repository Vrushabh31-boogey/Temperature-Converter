const celsiusInput = document.getElementById('celsius')
const fahrenheitInput = document.getElementById('fahrenheit')
const kelvinInput = document.getElementById('kelvin')

celsiusInput.addEventListener('input',function(){
    const celsiusValue = parseFloat(celsiusInput.value);
    if (isNaN(celsiusValue)) {
    return;
}
    const fahrenheitValue = (celsiusValue * 9/5 +32);
    const kelvinValue = (celsiusValue + 273.15);
    fahrenheitInput.value = fahrenheitValue;
    kelvinInput.value = kelvinValue;
})

fahrenheitInput.addEventListener('input',function(){
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheitValue)) {
    return;
}
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    const kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;
    celsiusInput.value = celsiusValue;
    kelvinInput.value = kelvinValue;
})

kelvinInput.addEventListener('input',function(){
    const kelvinValue = parseFloat(kelvinInput.value);
    if (isNaN(kelvinValue)) {
    return;
}
    const celsiusValue = kelvinValue - 273.15;
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    celsiusInput.value = celsiusValue;
    fahrenheitInput.value = fahrenheitValue;
})