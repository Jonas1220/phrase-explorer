import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
interface PhraseArrayItem {
    key: number;
    input: string;
    output: string;
};

export default function Lang() {
    const {lang} = useParams()
    const navigate = useNavigate()
    const Langs:LanguageData=data;
    const [filter, setFilter] = useState('');
    const [filteredPhrases, setFilteredPhrases] = useState<any>();
    useEffect(()=>{
        if (lang) {
            if (!Langs[lang]) { navigate('/') }
            else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
        }
    },[lang,Langs,navigate])

    useEffect(()=>{
        if (lang) {
            const test:PhraseArrayItem[] = Object.keys(Langs[lang]['phrases']).map((originalPhrase, index) => (
                { key: index, input: originalPhrase, output: Langs[lang]['phrases'][originalPhrase] }
            ))
            const filteredPhrasesTmp = test.filter((item) => item.input.toLowerCase().includes(filter.toLowerCase()))
            setFilteredPhrases(filteredPhrasesTmp) 
        }

    },[filter])
    
    
    return lang ? (
        <div className="w-full flex flex-col items-center">
                <div className='max-w-2xl w-full flex justify-between items-center my-3 p-2'>
                    <button className='text-2xl text-white' onClick={()=>navigate('/')}>{'←'}</button>
                    <div className={"w-12 h-12 rounded-full border fib fis fi-"+lang}></div>
                    <div className='text-2xl opacity-0'>{'←'}</div>
                </div>
                <div className='bg-blue-200s w-full max-w-2xl p-2 px-3 bg-white rounded-3xl'>
                    <input className='w-full p-2 rounded-full my-2 bg-slate-200 border focus:border-indigo-500 shadow-inner' type="text" placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
                    {/* {Object.keys(Langs[lang]['phrases']).map((originalPhrase, index) => (
                        <Translation langIso={lang} key={index} input={originalPhrase} output={Langs[lang]['phrases'][originalPhrase]}/>
                    ))} */}
                    {filteredPhrases?.length ? filteredPhrases.map((item: { output: string; input: string; }, index: React.Key | null | undefined) => (
                        <Translation langIso={lang} key={index} input={item.output} output={item.input}/>
                    ))
                    :
                    <div className='my-3 flex flex-col items-center bg-slate-200 justify-between py-2 px-4 rounded-xl shadow-md shadow-slate-400'>
                        <h1>Phrase not found</h1>
                        <h1>But feel free to add the phrase</h1>
                        <Link to={'https://forms.gle/gZcQnbGBqnu8neYW8'} target='_blank' className='text-center px-2 py-2 border border-gray-600 rounded-full text-gray-600 hover:text-black hover:border-black ease-in transition-all text-xs'>Add Phrase</Link>
                    </div>
                    }
                </div>
        </div>
    ) : (
        <div>loading..</div>
    )
}
