import React from 'react'

export default function Translation({langIso, input, output}:{langIso:string, input:string, output:string}) {
    return (
        <div className='my-2 flex flex-col items-center bg-slate-200 _hover:bg-indigo-500 hover:text-white justify-between py-2 px-4 rounded-xl ease-in transition-all'>
            <h1 className='text-xl text-black text-center whitespace-pre'>{output}</h1>
            <h1 className='text-xs text-gray-500'>{'('+input+')'}</h1>
        </div>
    )
}
