fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    //1. - Get all the countries from Asia continent/region using Filter function
    const countriesInAsia = data.filter((country) => country.region === "Asia");

    console.log("Countries in Asia:");
    countriesInAsia.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
      );
    });

    //2. - Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithLessPopulation = data.filter(
      (country) => country.population < 200000
    );

    console.log("\nCountries with population less than 2 lakhs:");
    countriesWithLessPopulation.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Population: ${country.population}`
      );
    });

    //3. - Print the following details name, capital, flag, using forEach function
    console.log("\nDetails of all countries:");
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
      );
    });

    //4. - Print the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log(`\nTotal Population: ${totalPopulation}`);

    //5.- Print the country that uses US dollars as currency
    const countryWithUSD = data.find((country) => {
      const currencies = Object.values(country.currencies);
      return currencies.includes("USD");
    });

    console.log("\nCountry that uses US Dollars as currency:");
    console.log(
      `Name: ${countryWithUSD.name.common}, Capital: ${countryWithUSD.capital}, Flag: ${countryWithUSD.flags.svg}`
    );
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
