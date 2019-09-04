import React from 'react'



const MediaBar = ( {ico , icoDescription, text})=>{

    console.log('ICO',ico)
    console.log('icoDescription',icoDescription)
    console.log('text',text)

    return (
        <div className='media-bar d-flex justify-content-center align-items-center '>
            <img src={ico} all={icoDescription}/>
                { text ? <p>{text}</p>: <></>
                    
                
                }
           
        </div>
    )
}

export default MediaBar