import React from 'react'
import { Link } from 'react-router-dom'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LangItem({langIso, lang, flag}:{langIso:string, lang:string, flag:string}) {
    return (
        <Link to={'/'+langIso} className='bg-slate-200 hover:bg-indigo-500 hover:text-white flex justify-between my-2 py-2 px-4 rounded-xl items-center ease-in transition-all'>
            <h1 className='text-2xl sm:text-3xl'>{lang}</h1>
            <span className={"w-10 h-10 rounded-full fib fis fi-"+langIso}></span>
        </Link>
    )
}
