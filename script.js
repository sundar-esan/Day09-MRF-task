
var data= new XMLHttpRequest();
data.open('GET',"https://restcountries.com/v3.1/all",true);
data.send();
data.onload = function(){
     var res= JSON.parse(data.response);
     console.log(res);
 //a)Get all the countries from Asia continent /region using Filter function
     
     let asiacountries=res.filter((ele)=>ele.region==='Asia');
     console.log('ASIA COUNTRIES:' , asiacountries);

   //b)Get all the countries with a population of less than 2 lakhs using Filter function

      let population=res.filter((ele)=>ele.population<200000);
      console.log('Countries with a population of less than 2 lakhs:',population);

    //c)Print the following details name, capital, flag using forEach function

        res.forEach(element => {
             console.log("Name :" , element.name.common);
             console.log("capital:",element.capital && element.capital[0]);
             console.log("Flag:",element.flag );
               });

   //d)Print the total population of countries using reduce function

   let totalpopulation= res.reduce((acc,ele)=> acc+ele.population,0);
     console.log(`TOTAL POPULATION:${totalpopulation}`);

   //e)Print the country which uses US Dollars as currency

     let uscurrency=res.filter((ele)=>ele.currencies && ele.currencies.USD !== undefined);
     console.log("Country uses US Dollars as currency:",uscurrency);
     
}

