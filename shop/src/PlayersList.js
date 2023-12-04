import React from "react";
import Players from "./Player";
import players from "./players";


const   Playerslist  = ()=> {
    return(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {players.map((player, index) => (<player key ={index} {...player}/>
            ))}

        </div>
     );

};
export default Playerslist;