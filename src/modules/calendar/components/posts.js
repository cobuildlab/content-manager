import React from 'react'
import Plus from '../../../assets/ico/plus.svg'

const plus = <img src={Plus} alt='plus ico '/>
 
const postFake = ['','','','','','','','','','','',plus]



const Posts = (props)=> {

    console.log(' PROPS FROM COMPONENT POSTS:', props)

    return (
        <div className='d-flex flex-column' >
            <div>
                <h2 className='font-monht'>August</h2>
                <hr/>
                <div className='d-flex flex-wrap '>
                    {postFake.map((value,index)=>{
                       return <div className='text-white post-card background-card d-flex justify-content-center align-items-center ' key={index}>
                                 {value}
                               </div>
                    })}
                </div>
            </div>   
   
        </div>
    )
}



export default Posts
