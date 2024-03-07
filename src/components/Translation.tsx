import React from 'react'

export default function Translation({input, output}:{input:string, output:string}) {
    return (
        <div className='text-gray-500'>{input+' - '+output}</div>
    )
}
