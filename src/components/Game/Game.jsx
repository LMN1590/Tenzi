import React from 'react'

import './Game.css'

export default function Game({dices,setDices}){
    const [count,setCount]=React.useState(0);
    function clickHandler(id){
        setDices(prev => {
            let newArr=[...prev];
            newArr[id].state=!prev[id].state;
            return newArr;
        })
    }
    function reRoll(){
        setDices(prev => {
            const newArr=prev.map(el => {
                el.value=el.state?el.value:(Math.floor(Math.random()*6)+1);
                return el;
            })
            return newArr;
        })
        setCount(prevCount => {
            return prevCount+1;
        })
    }
    const diceView=dices.map(el => {
        return (
            <div className={"num " + (el.state?"checked":"")} key={el.id} onClick={() => clickHandler(el.id)}>
                <span>
                    {el.value}
                </span>
            </div>
        )
    }) 
    function check(){
        let res=true;
        for(let i=0;i<dices.length;i++){
            let el=dices[i];
            if(el.value===dices[0].value) continue;
            else{
                res=false;
                break;
            }
        }
        return res;
    }
    const [checkVar,setCheck]=React.useState(check());
    React.useEffect(()=>{
        setCheck(check());
    })
    return(
        <div className="game">
            <div className="dices">
                <div className="row">
                    {diceView.slice(0,5)}
                </div>
                <div className="row">
                    {diceView.slice(5,10)}
                </div>
            </div>
            <div className="roll">
                <button onClick={reRoll}>
                    Lăn lại
                </button>
            </div>
            <div className={"res "+(checkVar?"":"invi")}>
                <span>Chúc mừng!! Bạn đã lãng phí {count} lượt vào trò chơi xamlol này. 🥳🥳</span>
            </div>
        </div>
    )
}