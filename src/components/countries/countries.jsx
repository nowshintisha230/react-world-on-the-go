import React, { useState, use } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise)
    const countries=countriesData.countries;
    
const [visitedCountries,SetVisitedCountries]=useState([]);
const handlerVisitedCountries=(country)=>{
 console.log('visited',country);
 const newVisitedCountries=[...visitedCountries,country];
SetVisitedCountries(newVisitedCountries);
 
}

    return (
        <div >
         <h1>Total Countries:{countries.length}</h1>
         <h1>Total Visited Countries:{visitedCountries.length}</h1>
         <ol className='list'>{
         visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}
         
         <img src={country.flags.flags.png} alt={country.name.common} 
        width="30"></img>
         </li>)
         }
         </ol>
  <div className='countries'>
          
         {
            countries.map(country=><Country key={country.cca3.cca3}country={country} handlerVisitedCountries={handlerVisitedCountries}></Country>)
         }
        </div>
        </div>
    );
};

export default Countries;