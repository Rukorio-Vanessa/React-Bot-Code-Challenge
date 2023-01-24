import React, {} from "react";

let botClass = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  }
const BotCard = function ({bot, deleteBotHandler, clickBotHandler}){
    return(
      <div className="col-3 p-1 my-2">
      <div className="card h-120" style={{width:"22rem"}}  key={bot.id}
          onClick={() => clickBotHandler(bot)}>
          <img src={bot.avatar_url} className="card-img-top " alt={"bot avatar"}/>
          <div className="card-body">
              <h4 className="card-title">{bot.name}</h4>
              <i className={botClass[bot.bot_class]} />
              <p className="card-text">{bot.catcphrase}</p>
          </div>
          <div className="card-text">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
              <div>
               <button className="btn btn-warning" onClick={(e) => {
                  e.stopPropagation();
                  deleteBotHandler(bot);
                }}>
                X
               </button>
              </div>
            </span>
          </div>
      </div>
  </div>
    )
}

export default BotCard;