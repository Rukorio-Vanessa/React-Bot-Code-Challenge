import React from "react";

let botClass = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
  };

  function selectedBotCard({bot}){
    return (
        <div>
            <div>
              <div>
                <div>
                  <img src={bot.avatar_url} alt="bot-avatar" />
                </div>
                <div>
                  <h2>Name: {bot.name}</h2>
                  <p>
                  <em>Their Catchphrase: </em>
                   {bot.catchphrase}
                  </p>
                  <strong>
                    Class: {bot.bot_class}
                     <i className={classBot[bot.bot_class]}/>
                  </strong>
                  <br />
                  <div>
                  <div>
                     <div>
                     <div>
                        <i className=""/>
                        <strong>{bot.health}</strong>
                        </div>
                     <div>
                         <i className=""/>
                         <strong>{bot.damage}</strong>
                         </div>
                     <div>
                         <i className=""/>
                         <strong>{bot.armor}</strong>
                     </div>
                                </div>
                            </div>
                        </div>
                        <button
                        onClick={()=>{}}>
                            Back
                        </button>
                        <button
                        onClick={()=>{}}>
                            AddBot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default selectedBotCard