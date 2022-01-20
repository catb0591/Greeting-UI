// 3)
import React, {useState} from "react";
import Response from './response'

const Input = () => {

const [name, setName] = useState('')

const handleName = event => {
    setName(event.target.value)
}

    return (
        <div>
            <input type="text" onChange={handleName}/>  
            <Response name={name}/>
        </div>
    )
}

export default Input


// 1)
// import React, { useState, useEffect } from "react";

// const Input = () => {

//     const [name, setName] = useState('')

//     const handleName = event => {
//         setName(event.target.value)
//     }

//     return (
//         <div>
//             <input type="text" onChange={handleName} />
//             {
//                 name ? <div>It's nice to meet you {name} </div> : <div></div>
//             }
//         </div>
//     )
// }

// export default Input


// 2)
// import React, { useState, useEffect } from "react";

// const Input = () => {

//     const [name, setName] = useState('')
//     const [greeting, setGreeting] = useState('')

//     useEffect(() => {
//         if (name.length !== 0) {
//             setGreeting(`It's nice to meet you ${name}`)
//         } else {
//             setGreeting('')
//         }
//     }, [name[,....]]) /*can also monitor nothing so would happen on every re-render(no array), blank array means it will run one when component is first rendered, array with values will do use effect
//     when any variable in the array changes(pieces of state or props)*/

//     const handleName = event => {
//         setName(event.target.value)
//     }

//     return (
//         <div>
//             <input type="text" onChange={handleName} />
//             <div>{greeting}</div>
//         </div>
//     )
// }

// export default Input