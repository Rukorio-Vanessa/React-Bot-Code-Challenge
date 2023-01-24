import React,{ useEffect, useState } from "react";
import BotCard from "./BotCard";

const BotCollection = function({botsNo, addBot, deleteBot}){
    const toDisplayBot = botsNo.map((bot)=>{
        return (
            <BotCard 
            
            key={bot.id}
            bot={bot}
            clickEvent={addBot}
            deleteBot={deleteBot}
            
            />

        )
    })

    return (
        <div className="container mt-4">
            <div className="row">
                {toDisplayBot}
            </div>
        </div>
    )
}



export default BotCollection;