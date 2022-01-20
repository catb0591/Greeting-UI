import React from "react";

const Response = (props) => {

return(
    <div>
        {
            props.name && <div>It's nice to meet you {props.name} </div> /*Does name have a value and does what's in the div have a value? If so then return what is on the right. Otherwise then it will return nothing*/
        }
    </div>
)

}

export default Response