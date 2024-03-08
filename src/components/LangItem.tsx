import React from 'react'
import { Link } from 'react-router-dom'

export default function LangItem({langIso, lang, flag}:{langIso:string, lang:string, flag:string}) {
    return (
        <Link to={'/'+langIso} className='bg-slate-300 flex justify-between my-2 py-2 px-4 rounded-full border border-black'>
            <h1 className='text-3xl'>{lang}</h1>
            <h1 className='text-3xl'>{flag}</h1>
        </Link>
    )
}
