import React from 'react';



const choice = ({item}) => {
    let random = Math.floor(Math.random() * item.length);
    return item[random];
}

const remove = ({fruits, random}) => {
    const fruta = fruits;
    let ran = fruta.indexOf(random);
    let removeFruit;
    return(
        removeFruit = fruta.splice(ran, 1)
    )
}


export {choice, remove};