import React from 'react';
import ReactDOM from 'react-dom';
import '../src/App.css';
import Cena from '../src/Cena.jpg';
import Joker from '../src/Joker2.jpg';
import Roman from '../src/Roman.jpg';
import Paris from '../src/Paris.jpg';
import London from '../src/London.jpg';
import Cappu from '../src/Cappu.jpg';
import Sea from '../src/Sea.jpg';
import Food from '../src/Food.jpg';
import Bheem from '../src/Bheem.jpg';


function App() {
  return (
    <div>


<i className="fa fa-instagram" style={{fontSize:'36px',marginLeft:'25px'}}></i>


  <input type="text" placeholder="Search.." name="search2"  style={{marginLeft:'1000px'}}></input>
  <button type="submit"><i className="fa fa-search"></i></button>

  
  <div className="container">
  <div className="profile">
 
  <div className="profile-image">
 
    <img src={Cena} alt="Cena" style={{width:'200px'}}/>
    
 
  </div>
  <div className="profile-user-settings">
  
  <h1 className="profile-user-name">Mark</h1>
 
 <span><button className="ftn profile-edit-ftn">Edit Profile</button></span>
  
 
  
</div>
 
<div className="profile-stats">
 
  <ul>
    <li><span className="profile-stat-count">3</span> posts</li>
    <li><span className="profile-stat-count">188</span> followers</li>
    <li><span className="profile-stat-count">206</span> following</li>
  </ul>
 
</div>
 
<div className="profile-bio">
 
  <p><span className="profile-real-name">Mark anthony</span> I loved travelling  📷✈️🏕️</p>
  <p>Life is what happens when you're busy making other plans</p>
  <p>“ You only live once, but if you do it right, once is enough.”</p>

 <span> <button type="button" className="btn btn-follow">follow</button> </span>
 <button type="button" class="ftn ftn-message">message</button>

 
</div>
 
</div>
 
</div>

<div className="pic">
 
<div className="pic-item" tabindex="0"></div>


<h1> Stroy Highlights</h1>

<img src={Paris} className="pic1" alt="pic1" className="Center"/>

<img src={London} className="pic" alt="pic" className="Center"/>


</div>

<div className="container">
<div className="gallery">

  <h1>Photo feeds</h1>
 
<div className="gallery-item" tabindex="0">
 
  <img src={Joker} className="gallery-image" alt=""/>
 


  <div className="gallery-item">
 
    <ul>
      
      <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>
 
       <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
 
    </ul>

    </div>
  </div>

 
<div className="gallery-item" tabindex="0">
 
  <img src={Roman} className="gallery-image" alt=""/>
 
  <div className="gallery-item">
 
    <ul>
      
      <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>
 
       <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
 </ul>
 
    
 </div>
</div>


 <div className="gallery-item" tabindex="0">
 
 <img src={Sea} className="gallery-image" alt=""/>

 <div className="gallery-item">

   <ul>
     
     <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>

      <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
</ul>

</div>
</div>

<div className="gallery-item" tabindex="0">
 
 <img src={Cappu} className="gallery-image" alt=""/>

 <div className="gallery-item">

   <ul>
     
     <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>

      <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
</ul>
   
</div>
</div>

<div className="gallery-item" tabindex="0">
 
 <img src={Food} className="gallery-image" alt=""/>

 <div className="gallery-item">

   <ul>
     
     <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>

      <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
</ul>
   
</div>
</div>

<div className="gallery-item" tabindex="0">
 
 <img src={Bheem} className="gallery-image" alt=""/>

 <div className="gallery-item">

   <ul>
     
     <i className='far fa-heart' style={{fontSize:'24px',marginright:'150px'}}></i>

      <i className='far fa-comment' style={{fontSize:'24px',marginLeft:'10px'}}></i>
</ul>

</div>
</div>
</div>
</div>
</div>

    
  
  );
}

export default App;
