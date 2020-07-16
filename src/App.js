import React from 'react';
import './style.css';
import Images from './images.jpg';
import MyVideo from './myVideo.mp4';

function App() {
  return (
    <div className='App'>
       
       <h1 style={{
       border: 'solid 1px black',
       maxwidth:100
       }}>
      </h1>
      <h1 className="title red">Your name here</h1> 
      
          <br />  
          <img src={Images} alt="" /> <br /> 
          <img src="/img1.jpg" alt="" />  
         
    
        <video width={320} height={240} controls>  
          <source src= {MyVideo} type="video/mp4" /> </video>
       
         
     </div>
    
  );
}

export default App;
