import React from 'react'

export default function Translation({langIso, input, output}:{langIso:string, input:string, output:string}) {
    return (
        <div className='my-2 flex flex-col items-center'>
            {/* <h1 className='text-xl text-black text-nowrap'>{output.replace(' (','\n\n(')}</h1> */}
            <h1 className='text-xl text-black self-center' dangerouslySetInnerHTML={{ __html: output.replace(' (','<br>(') }} />
            <h1 className='text-sm text-gray-500'>{'('+input+')'}</h1>
        </div>
    )
}
