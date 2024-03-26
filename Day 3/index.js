/*1. - How to compare two JSON have the same properties without order?

a. let obj1 = { name: "Person 1", age:5},

    b.let obj2 = { age: 5, name: "Person 1" };

Ans - let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" }; */

// Convert objects to strings and sort the properties
let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
let areEqual = str1 === str2;

console.log(areEqual); // Output: true

/*2. - 2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console*/
 
// code is here -

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const flag = country.flags.svg;
      console.log(flag);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


/* 3 - Use the same rest countries and print all countries names, regions, sub-region and populations

Anwser is here*/

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;
      console.log(
        `Name: ${name}, Region: ${region}, Subregion: ${subregion}, Population: ${population}`
      );
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


