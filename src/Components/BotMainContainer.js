import React, {useState, useEffect} from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "https://bot-server-five.vercel.app/bots"

function BotMainContainer (){
    const [bots, setBots] = useState([]);
    
    //fetch bots
    const getBots = function(){
      return (fetch (API_URL)
      .then(res=>res.json())
      .then((data)=>{
      setBots(data)
    })
    
    )
    }
    useEffect(()=>{
    getBots();
    }, [])
    
    //add and display a bot when clicked
    const addBot= (bot)=>{
    setBots(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
    }
    const removeBot =(bot)=>{
    setBots(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
    }
    
    const deleteBotHandler = (bot)=>{
    const deletedABot = bots.filter((b)=> b.id !==bot.id);
    setBots((bots)=>deletedABot)
    }
    
    return (
    <div>
    <YourBotArmy
      bots={bots.filter((b)=>b.army)}
      removeBot={removeBot}
      deleteBotHandler={deleteBotHandler}
    />
    <BotCollection
      botsNo={bots}
      addBot={addBot}
      deleteBotHandler={deleteBotHandler}
    />
    </div>
    )
    }
    
    export default BotMainContainer