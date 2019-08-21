import React,{ Component  } from 'react';
import DashborNav from '../../components/dashboardNav'
import InstagramBar from '../../components/instagramBar'
import Facebook from '../../components/facebookBar'

class HomeView extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      
        <div className='dashboard-container'>
              <DashborNav/>
        </div>
   
    )
  }
}

export {HomeView}
