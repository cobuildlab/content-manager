import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Menu from '../../components/Menu'
const HomeView = () => {
  return(
    <Fragment >
      <Header />
      <Menu />
      <div className='main'>
      Home
      </div>
    </Fragment>
  )
}

export {HomeView}
