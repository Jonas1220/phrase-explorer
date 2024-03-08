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
        <div className="w-full flex flex-col items-center mt-2">
            <div className='flex w-full justify-between'>
                <button className='text-xl text-white' onClick={()=>navigate('/')}>{'<-'}</button>
                <div className={"w-12 h-12 rounded-full fib fis fi-"+lang}></div>
                <div className='opacity-0'>{'<-'}</div>
            </div>
            <div className='w-full max-w-2xl'>
                {Object.keys(Langs[lang]['phrases']).map((originalPhrase, index) => (
                    <Translation langIso={lang} key={index} input={originalPhrase} output={Langs[lang]['phrases'][originalPhrase]}/>
                ))}
            </div>
        </div>
    ) : (
        <div>loading..</div>
    )
}
