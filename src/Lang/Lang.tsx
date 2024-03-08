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
        <div>
            {/* <button onClick={()=>navigate('/')}>X</button> */}
            <div className={"w-10 h-10 rounded-full fib fis fi-"+lang}></div>
            <div>
                {Object.keys(Langs[lang]['phrases']).map((originalPhrase, index) => (
                    <Translation langIso={lang} key={index} input={originalPhrase} output={Langs[lang]['phrases'][originalPhrase]}/>
                ))}
            </div>
        </div>
    ) : (
        <div>loading..</div>
    )
}
