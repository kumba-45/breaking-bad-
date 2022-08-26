import React, {useEffect, useState} from 'react';
import './Actor.css';

const Actor = () =>{
    const [name, setName] = useState([]);
    

useEffect (()=>{
    fetch('https://www.breakingbadapi.com/api/characters').then(
        res => res.json()
    ).then(data => 
    setName(data)
    
    );
},[])


    return(
        <div>
            {
                name.map((item) =><div className='card' >
                    
                    <img className='image' src={item.img}/>
                    
                    
                    <h1>Actor name:{item.name}</h1>
                    <h3>Birthday:{item.birthday}</h3>
                    <h3>Nickname:{item.nickname}</h3>
                    <h3>status:{item.status}</h3>
                    
                </div>)
            }
            

        </div>
    );

};
export default Actor;