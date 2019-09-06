import React from 'react'
import DashborNav from '../../../components/dashboardNav'
import MediaBar from '../../../components/mediabar'
import TextIco from '../../../assets/ico/text.svg'
import PictureIco from '../../../assets/ico/picture.svg'
import VideoIco from '../../../assets/ico/video.svg'
import GifIco from '../../../assets/ico/gif.svg'
import FacebookIco from '../../../assets/ico/facebook.svg'
import TwitterIco from '../../../assets/ico/twitter.svg'
import InstagramIco from '../../../assets/ico/Instagram.svg' 


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
                                     <div className='d-flex flex-wrap'>
                                       
                                        <MediaBar
                                                
                                           ico={TextIco} 
                                            icoDescription={'text ico'}
                                            text={'text'} 
                                               
                                            />


                                        <MediaBar

                                            ico={PictureIco} 
                                            icoDescription={'picture ico'}
                                            text={'picture(s)'} 
                                             
                                             />

                                        <MediaBar

                                            ico={VideoIco} 
                                            icoDescription={'video ico'}
                                            text={'video'} 
                                             
                                             />

                                        <MediaBar

                                            ico={GifIco} 
                                            icoDescription={'gif ico'}
                                            text={'Animate Gif'} 
                                             
                                     />
                                        
                                     </div>

                                     <h3 className='text-white' >
                                         Social Network
                                     </h3>

                                     <div className='d-flex'>

                                        <MediaBar
                                        
                                            ico={FacebookIco} 
                                            icoDescription={'facebook ico'}
            
                                        />
                                        <MediaBar
                                        
                                            ico={TwitterIco} 
                                            icoDescription={'twitter ico'}
        
                                        />
                                        <MediaBar
                                        
                                            ico={InstagramIco} 
                                            icoDescription={'instagram ico'}
    
                                         />

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