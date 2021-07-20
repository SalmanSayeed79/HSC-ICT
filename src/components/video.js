import React,{useRef} from 'react'
import '../styles/video.css'

export default function Video({title, url}) {
    const viewRef=useRef(null)
    return (
        <div className="video">
            <h4 onClick={()=>{
                viewRef.current.classList.toggle("show_video")
            }}>{title}</h4>
            <div className="hidden_content" ref={viewRef}>
                <iframe src={url} allowFullScreen></iframe>
                <a href={url} target="_blank">External Link</a>
            </div>
            
        </div>
    )
}
