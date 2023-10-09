import React from 'react'
import './styles.css'

const Home = () => {
  return (
    <section>
      <img src="https://smu.edu.ph/wp-content/uploads/2021/07/cropped.jpg" alt="" />
      <div className="content-left">
        <h1>Ensure your <br />Future!</h1>
        <p>Saint Mary's University traces its roots back to the dream and 
        initiative of the late Msgr. Constant Jurgens, CICM, then Parish 
        Priest of Bayombong and one of the earliest CICM missionaries to 
        arrive in the Philippines.</p>
      </div>
      <div className="content-right">
        <img src="https://smu.edu.ph/wp-content/uploads/2023/03/iso-1-768x777.png" alt="" />
      </div>

    </section>
  )
}

export default Home