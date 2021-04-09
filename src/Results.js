// map through component and output in component

import React from 'react';


const Results = ({title,publishedAt,urlToImage,description, url, author}) => {

      // Custom css classes
  const leftText = {
    float:'left'
}
const rightText = {
  float:'right'
}
    return(
        <div className="App">
      <header className="App-header">
      <div className="grid-container">
      <div className="search-bar">
        <form className="search-form">
            <input className="search-bar-input" placeholder="Search" type="text"/>
            
            <button className="search-btn" type="submit">Search</button>
          </form>
    </div>
  <div className="content">
    <img src={urlToImage} alt=""/>
    <sub style={leftText}>{author}</sub>
    <sub style={rightText}>{publishedAt}</sub>
    <h3>{title}</h3>
    <p>{description}
    </p>
    <a href={url}><button className="read-btn">READ MORE</button></a>
  </div>
  <div className="sidebar">
    <h3>PUBLISHER</h3> 
    <ul>
      <li>PUBLISHER ONE</li>
      <li>PUBLISHER TWO</li>
      <li>PUBLISHER THREE</li>
      <li>PUBLISHER FOUR</li>
      <li>PUBLISHER FIVE</li>
      <li>PUBLISHER SIX</li>
    </ul>
  </div>
  <div className="content2">   
   <img src={urlToImage} alt=""/>
   <sub>{author}</sub>
   <h3>{title}</h3>
   <sub>{publishedAt}</sub>
   <a href={url}><button className="read-btn-outline">READ MORE</button></a>
  </div>
  <div className="content3">
  <img src={urlToImage} alt=""/>
   <sub>{author}</sub>
   <h3>{title}</h3>
   <sub>{publishedAt}</sub>
   <a href={url}><button className="read-btn-outline">READ MORE</button></a>
  </div>
  <div className="content4"> 
  <img src={urlToImage} alt=""/>
   <sub>{author}</sub>
   <h3>{title}</h3>
   <sub>{publishedAt}</sub>
   <a href={url}><button className="read-btn-outline">READ MORE</button></a>
  </div>
  <div className="content5">
  <img src={urlToImage} alt=""/>
   <sub>{author}</sub>
   <h3>{title}</h3>
   <sub>{publishedAt}</sub>
   <a href={url}><button className="read-btn-outline">READ MORE</button></a>
  </div>
</div>
</header>
    </div>
    )
}

export default Results;