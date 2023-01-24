import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = function({bots, deleteBot, removeBot}){
    const selectedBotArmy =  bots.map((bot)=>{
        return (
            <CardBot
            key={bot.id}
            bot={bot}
            clickEvent={removeBot}
            deleteBot={deleteBot}
            />
        )
    })


    return(
        <div className= 'd-block p-2 bg-secondary army'>
            <strong className="text-light">BOT BATTLR:click to add bot to your army!</strong>
            <div className="container mt-5">
                <div className="row army-row">
                    {selectedBotArmy}
                </div>
            </div>
        </div>
    )
}


export default YourBotArmy;