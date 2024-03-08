import React from 'react'

export default function Translation({langIso, input, output}:{langIso:string, input:string, output:string}) {
    return (
        <div className='my-3 flex flex-col items-center bg-slate-200 _hover:bg-indigo-500 hover:text-white justify-between py-2 px-4 rounded-xl shadow-md shadow-slate-400'>
            <h1 className='text-2xl text-black font-light text-center whitespace-pre-wrap'>{output}</h1>
            <h1 className='text-xs text-gray-500'>{'('+input+')'}</h1>
        </div>
    )
}
