import React from 'react'
import { useParams } from 'react-router-dom'

export default function Lang() {
    const {lang:lang} = useParams()
    return (
        <div>{lang}</div>
    )
}
