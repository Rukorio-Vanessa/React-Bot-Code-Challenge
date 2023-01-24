import React, {} from "react";


function BotCard({bot}){
    return(
      <div className="col-3 p-1 my-2">
      <div className="card h-120" style={{width:"22rem"}}>
          <img src={bot.avatar_url} className="card-img-top " alt={"bot avatar"}/>
          <div className="card-body">
              <h4 className="card-title">{bot.name}</h4>
              <p className="card-text">{bot.catcphrase}</p>
          </div>
      </div>
  </div>
    )
}

export default BotCard;