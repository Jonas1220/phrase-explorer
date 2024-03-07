import React, { useState } from 'react'
// import data from "../utils/data.json"
export default function Start() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [filter, setFilter] = useState('');

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div className="bg-red-400">
            <input
                type="text"
                placeholder="Search..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
// Turkish, swedish, german, spanish, italian, french, dutch, Portuguese, Arabic, Chinese (Mandarin), Russian, Japanese, Hindi, Korean