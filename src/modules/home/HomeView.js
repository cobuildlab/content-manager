import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import {BarTittle} from './components/Bartittle'

const HomeView = () => {
  return(
    <Fragment >
      <Header />
      <Menu />
      <div className='main'>
      <BarTittle  name="@LoremIpsum" post='100' mentions="30"/>
      </div>
    </Fragment>
  )
}

export {HomeView}
