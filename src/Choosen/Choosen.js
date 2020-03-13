import React from 'react';
import './Choosen.css';

export default function Choosen({choosen,ReturnBack,wrong}) {
    console.log(choosen);
    console.log(wrong);

    let prod = choosen.map(item => 
        <ul className="Container-item" key={item.asin}>
            <li><span>Name: </span>{item.name}</li>
            <li><span>Domain:</span> {item.domain}</li>
            <li><img src={item.img} alt="product" className="Container-image"/></li>
            <li><a href={item.link} target="_blanck">Link to product</a> </li>
        </ul>)
    return(
        <>
       <div className="Container-list">
           {
            wrong ? prod : <p className="Container-match">No match</p>          
           }
       </div>
       <button onClick={ReturnBack}>Show All</button>
       </>
    )
}