import React from 'react'
import './styles.css'

const Header = () => {
  function register() {
    window.location.href = './login'
  }
  return (
    <div className="header">
      <header>
        <div className="logo">
          <img src="https://smu.edu.ph/wp-content/uploads/2021/05/HEADER-600x141.png" alt="" />
        </div>
        <div className="logo-right">
          <div className="right">
            <img src="https://smu.edu.ph/wp-content/uploads/2023/03/small-1-300x124.png" alt="" />
            <i className='bx bxl-facebook-square' ></i>
            <i className='bx bxl-gmail'></i>
          </div>
        </div>
      </header>
      <div className="semi-header">
        <div className="navs">
          <ul>
            <li><a href="/">ABOUT THE UNIVERSITY</a></li>
            <li><a href="/">ADMISSIONS</a></li>
            <li><a href="/">ACADEMICS</a></li>
            <li><a href="/">CAMPUS LIFE</a></li>
            <li><a href="/">MISSION AND IDENTITY</a></li>
            <li><a href="/">FORMS</a></li>
            <li><a href="/">INFO</a></li>
            <li><a href="/">LEARNING SYSTEM</a></li>
          </ul>
        </div>
        <div className="links">
          <button id='esmis'>
            eSMIS <br />Enroll Here
          </button>
          <button onClick={register} id="portal">
            Portal <br />
          </button>
        </div>
      </div>
    </div>


  )
}

export default Header