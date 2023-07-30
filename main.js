// kelvin is a constant variable set at 293
const kelvin = 293;

// celcius is kelvin - 273
const celsius = kelvin - 273;

// formula for celsius to fahrenheit
// round results down to the nearest whole number
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`);
