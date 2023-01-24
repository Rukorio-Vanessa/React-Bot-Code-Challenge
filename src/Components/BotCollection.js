import React from "react";
import BotCard from "./BotCard";

const BotCollection = function({botsNo, addBot, deleteBotHandler}){
    const toDisplayBot = botsNo.map((bot)=>{
        return (
            <BotCard 
            
            key={bot.id}
            bot={bot}
            clickBotHandler={addBot}
            deleteBotHandler={deleteBotHandler}
            
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