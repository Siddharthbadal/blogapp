"use client"
import { useState } from "react"

export default function Spoiler(props){
    const [showSpoiler, setShowSpoiler] =  useState(false)

    function handleSpoiler(){
        setShowSpoiler(prev => !prev);
    }

    function hideSpoiler(){
        setShowSpoiler(prev => !prev)
    }

    return (
        <div className="bg-gray-200 p-8 rounded-lg relative overflow-hidden not-prose ">
             
             {!showSpoiler && (
                <button className="bg-gray-400 hover:bg-gray-600 text-white rounded-lg px-4 py-2 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold" 
                onClick={handleSpoiler}>
                    {props.data.clickabletext}
                    </button>
             )}

             {showSpoiler && (
                <button onClick={hideSpoiler} className="absolute top-2 right-3 text-gray-500">
                     👜
                </button>
             )}

             <div className={"text-xl transition duration-300 " +(!showSpoiler ? "blur": "")} >
                        {props.data.actualtext}
                        
                </div>
        </div>
    )
}