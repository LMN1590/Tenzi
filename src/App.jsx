import React from 'react'

import Desc from './components/Desc/Desc'
import Game from './components/Game/Game'

import './App.css'

export default function App() {
    function genDice(){
        let arr=[];
        for (let i=0;i<10;i++){
            arr.push(
                {
                    'id':i,
                    'value':Math.floor(Math.random()*6)+1,
                    'state':false
                }
            );
        }
        return arr;
    }
    
    const [dices,setDices]=React.useState(genDice);
    
    return (
        <main className="content">
            <Desc/>
            <Game dices={dices} setDices={setDices}/>
            
        </main>
    )
}