import React from 'react'

const AUI=(props)=> {
    // console.log(props.show)
        return (
            <div>
            {props.flag?
            
            null:
        <div>{props.children}</div>
        }
        </div>
        )
}

export default AUI