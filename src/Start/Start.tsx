import React, { useState } from 'react'
import data from "../utils/data.json"
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

const createLanguageArray = (data: LanguageData): { key: string; val: string }[] => {
    return Object.keys(data).map((key) => ({
        key,
        val: `${data[key].full} ${data[key].flag}`
    }));
};

const languageArray: LanguageArrayItem[] = createLanguageArray(data);

const lang= 'de';

console.log(data[lang]);


export default function Start() {
    const [filter, setFilter] = useState('');

    const filteredLanguages = languageArray.filter(
        (item) => item.val.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div className="bg-red-400">
            <input type="text" placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
            <ul>
                {filteredLanguages.map((item, index) => (
                    <li key={item.key}>
                        <Link to={"/"+item.key}>{item.val}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
// Turkish, swedish, german, spanish, italian, french, dutch, Portuguese, Arabic, Chinese (Mandarin), Russian, Japanese, Hindi, Korean