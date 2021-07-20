import React from 'react'
import '../styles/resource.css'

export default function Resource({title, url}) {
    return (
        <div className="resource">
            <h4><a href={url} target="_blank">{title}</a></h4>
        </div>
    )
}
