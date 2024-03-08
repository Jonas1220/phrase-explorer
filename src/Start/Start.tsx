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
            <div className='max-w-2xl w-full flex justify-between items-center my-5 p-2'>
                <h1 className='text-3xl text-gray-100 subpixel-antialiased'>Phrase Explorer</h1>
                <Link to={'https://grnwinlvg3n.typeform.com/to/YWb8qz0I'} target='_blank' className='px-3 py-1 border border-gray-300 rounded-full text-gray-300 hover:text-white hover:border-white'>Add Language</Link>
            </div>
            <div className='bg-blue-200s w-full max-w-2xl p-2 px-3 bg-white rounded-3xl'>
                <input className='w-full p-2 rounded-full my-2 bg-slate-200 border focus:border-indigo-500 shadow-inner' type="text" placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
                {filteredLanguages.map((item, index) => (
                    <LangItem key={item.key} langIso={item.key} lang={item.val} />
                ))}
            </div>
        </div>
    )
}