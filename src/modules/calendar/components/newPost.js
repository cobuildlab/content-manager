import React from 'react'
import DashborNav from '../../../components/dashboardNav'
import MediaBar from '../../../components/mediabar'
import TextIco from '../../../assets/ico/text.svg'


const newPost=()=>{
    return (
        <div className='calendar-container d-flex'>
            <DashborNav/>
            <div className='d-flex flex-column  container-newPost'>
                          <div className='div-newPost' >
                                 <h2>
                                     New Post
                                 </h2>
                          </div>
                            <div className='div-information d-flex justify-content-between flex-wrap  '>
                                 <div className='div-typePost'>
                                     <h3 className='text-white'>
                                         Type of post
                                         
                                     </h3>
                                     <div className='text-white'>
                                         <MediaBar 
                                            ico={TextIco} 
                                            icoDescription={'text ico'}
                                            text={'text'} 
                                             
                                             />
                                        
                                     </div>
                                     <h3 className='text-white' >
                                         Social Network
                                     </h3>
                                     <div className='text-white' >
                                         banner
                                     </div>
                                 

                                </div>
                                 <div className='div-preview' >

                                 </div>
                                 <div className='div-button text-white' >
                                         SAVE TO CALENDAR
                                 </div>

                             </div>
                </div>
        </div>
    )
}

export default newPost