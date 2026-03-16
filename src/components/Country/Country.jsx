import React, { useState } from 'react';

const Country = ({country,handlerVisitedCountries}) => {
    console.log(country);
    const[visited,setVisited]=useState(false);
    const handleVisited=()=>{
        if(visited){
setVisited(false)
        }else{
setVisited(true)

handlerVisitedCountries(country)


        }
    }
    
    
    return (
        <div className={`name ${visited && 'country-visited'}`}>
       
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Common name:{country.name.common}</h3>
            <h3>Official name:{country.name.official}</h3>
            <h4>Area:{country.area.area}{country.area.area>30000 ?" Big country":" Small Country"}</h4>
            <h4>Population:{country.population.population}</h4>
            
            <button onClick={handleVisited}>{visited ? 'Visited':'Not Visited'}</button>

        </div>
    );
};

export default Country;