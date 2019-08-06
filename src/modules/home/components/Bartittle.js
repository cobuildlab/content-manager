import React from 'react'
import { PropTypes } from 'prop-types';
import './assets/bar-tittle.css'

const BarTittle = ({logo, name, post, mentions}) => {
  return(
    <div className='bar-tittle'>
      <img src={logo} alt='' />
      <div>
      <p>{name} post: {post} mentions: {mentions}</p>
      </div>
    </div>
  )
}

BarTittle.propTypes = {
  logo: PropTypes.string,
  name:PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  mentions: PropTypes.string.isRequired,
};
export  {BarTittle}
