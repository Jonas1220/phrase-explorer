import React, { useState } from 'react'
import data from "../utils/data.json"
import { Link } from 'react-router-dom';
import LangItem from '../components/LangItem';
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
    flag: string
};

// NOTE: create array from data object (only key,val and flag)
const createLanguageArray = (data: LanguageData): { key: string; val: string; flag: string }[] => {
    return Object.keys(data).map((key) => ({
        key,
        val: data[key].full,
        flag: data[key].flag
    }));
};

const languageArray: LanguageArrayItem[] = createLanguageArray(data);

export default function Start() {
    const [filter, setFilter] = useState('');
    // NOTE: filter and sort 
    const filteredLanguages = languageArray.filter((item) => item.val.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.val.localeCompare(b.val));
    return (
        <div className="bg-red-200 w-full flex justify-center">
            <div className='bg-blue-200s w-full max-w-4xl border border-black p-2'>
                <div className='bg-green-200s w-full flex justify-between'>
                    <h1>HEADER</h1>
                    <button>btn</button>
                </div>
                <input className='w-full p-2 rounded-full my-2' type="text" placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
                {filteredLanguages.map((item, index) => (
                    <LangItem langIso={item.key} lang={item.val} flag={item.flag}/>
                ))}
            </div>
        </div>
    )
}