import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from "../utils/data.json"
import Translation from '../components/Translation';
import "/node_modules/flag-icons/css/flag-icons.min.css";
interface LanguageData {
    [key: string]: {
        phrases: { [key: string]: string };
        flag: string;
        full: string;
    };
}

export default function Lang() {
    const {lang} = useParams()
    const navigate = useNavigate()
    const Langs:LanguageData=data;
    useEffect(()=>{
        if (lang) { if (!Langs[lang]) { navigate('/') } }
    },[lang,Langs,navigate])
    
    return lang ? (
        <div className="w-full flex flex-col items-center">
                <div className='max-w-2xl w-full flex justify-between items-center my-3 p-2'>
                    <button className='text-2xl text-white' onClick={()=>navigate('/')}>{'←'}</button>
                    <div className={"w-12 h-12 rounded-full border fib fis fi-"+lang}></div>
                    <div className='text-2xl opacity-0'>{'←'}</div>
                </div>
                <div className='bg-blue-200s w-full max-w-2xl p-2 px-3 bg-white rounded-3xl'>
                    {Object.keys(Langs[lang]['phrases']).map((originalPhrase, index) => (
                        <Translation langIso={lang} key={index} input={originalPhrase} output={Langs[lang]['phrases'][originalPhrase]}/>
                    ))}
                </div>
        </div>
    ) : (
        <div>loading..</div>
    )
}
