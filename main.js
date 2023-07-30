// kelvin is a constant variable set at 293
const kelvin = 293;
// celcius is a constant that is a result of subtracting 273 from kelvin
const celcius = kelvin - 293;
// faherheit is stored in reassignable variable and is the result of celius multiplied by the sum of 9/5 + 32 
let Fahrenheit = celcius * (9/5) + 32;
// Using fahrenheit variable and rounding it down 
Fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ${fahrenheit} degrees Fahrenheit');
