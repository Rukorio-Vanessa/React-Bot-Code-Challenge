import React from "react";


function BotCard({bot}){
    return(
      <div className="col-3 p-1 my-2">
      <div className="card h-100" style={{width:"18rem"}}>
          <img src="#" className="card-img-top " alt={"bot pic"}/>
          <div className="card-body">
              <h5 className="card-title">{"Bot Name"}</h5>
              <p className="card-text">{"catchphrase"}</p>
          </div>
      </div>
  </div>
    )
}

export default BotCard;