import React from 'react';
import Card from './Card'

const CardList=({props})=>{
    let cardComponent= props.map((user,i) =>{
        return <Card key={i} id={props[i].id} name={props[i].name} username={props[i].username} power={props[i].power}/>
    })


    return(<div>
        {cardComponent} 

    </div>)

}

export default CardList;