import React from 'react'

const AUI=(props)=> {
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