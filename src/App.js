import './App.css';
import { useState } from 'react';
function App() {
  const [isActive, setIsActive] = useState(true)
  const handleClick=(e)=>{
    setIsActive(isActive=>!isActive)
  }
  return (<>
    <div className="app">
     <div className='main-page'>
        <div  className='header'>
          <h3>GOD FOUNDATION</h3>
          <div >
            <ul 
            id='navbar'
            className={isActive?'#navbar':'#navbar active'}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='icon-bar'>
            <i className={isActive?"fas fa-bars":"fas fa-times"}
            onClick={handleClick}
            ></i>
           
            </div>
          </div>
          </div>
          <div className='content'>
            <h3>ART CONCEPT DRAW</h3>
            <h1>RECREATE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Eius quas ipsum suscipit repellendus exercitationem 
               consectetur </p>
            <button className='btn'>Explore work</button>
          </div>
        
  </div>
      <section id='section-part'>
        <div className='design'><h2>The Art</h2>
          <h4>When  you  have limite space to showcase work</h4>
          <p>Lorem ipsum dolor sit, amet  iste ullam non consequuntur
             soluta necessitatibus assum  reiciendis nisi
             quas harum illum optio.</p>
          <button>Designs</button>
</div>
<div className='design'><h2>The code</h2>
          <h4>practice is better then precept</h4>
          <p>Lorem ipsum dolor sit, amet  iste ullam non consequuntur
             soluta necessitatibus assum  reiciendis nisi
             quas harum illum optio.</p>
          <button >Programs</button>
</div>
      </section>
     
    </div>
    </>
  );
}

export default App;
