import React, { useState } from 'react'
import data from "../utils/data.json"
import LangItem from '../components/LangItem';
import { Link } from 'react-router-dom';
interface LanguageData {
    [key: string]: {
        phrases: { [key: string]: string };
        flag: string;
        full: string;
    };
}
interface LanguageArrayItem {
    key: string;
    val: string;
};

// NOTE: create array from data object (only key,val and flag)
const createLanguageArray = (data: LanguageData): { key: string; val: string; }[] => {
    return Object.keys(data).map((key) => ({
        key,
        val: data[key].full,
    }));
};

const languageArray: LanguageArrayItem[] = createLanguageArray(data);

export default function Start() {
    const [filter, setFilter] = useState('');
    // NOTE: filter and sort 
    const filteredLanguages = languageArray.filter((item) => item.val.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.val.localeCompare(b.val));
    return (
        <div className="w-full flex flex-col items-center">
            <div className='max-w-2xl w-full flex justify-between items-center my-2 p-2'>
                <h1 className='text-3xl text-gray-100 subpixel-antialiased'>Phrase Explorer</h1>
                <div className='flex flex-col gap-3'>
                    <Link to={'https://forms.gle/gZcQnbGBqnu8neYW8'} target='_blank' className='text-center px-2 py-2 border border-gray-300 rounded-full text-gray-300 hover:text-white hover:border-white ease-in transition-all text-xs'>Add Phrases</Link>
                    <Link to={'https://forms.gle/QaKXNzjUfEnLPqsr5'} target='_blank' className='text-center px-2 py-2 border border-gray-300 rounded-full text-gray-300 hover:text-white hover:border-white ease-in transition-all text-xs'>Add Languages</Link>
                </div>
            </div>
            <div className='bg-blue-200s w-full max-w-2xl p-2 px-3 bg-white rounded-3xl'>
                <input className='w-full p-2 rounded-full my-2 bg-slate-200 border focus:border-indigo-500 shadow-inner' type="text" placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
                {filteredLanguages.length ? filteredLanguages.map((item, index) => (
                    <LangItem key={item.key} langIso={item.key} lang={item.val} />
                ))
                :
                <div className='my-3 flex flex-col items-center bg-slate-200 justify-between py-2 px-4 rounded-xl shadow-md shadow-slate-400'>
                    <h1>Language not found</h1>
                    <h1>But feel free to add the language</h1>
                    <Link to={'https://forms.gle/QaKXNzjUfEnLPqsr5'} target='_blank' className='text-center px-2 py-2 border border-gray-600 rounded-full text-gray-600 hover:text-black hover:border-black ease-in transition-all text-xs'>Add Language</Link>
                </div>
                }
            </div>
        </div>
    )
}