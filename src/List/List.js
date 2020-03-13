import React from 'react';
import './List.css';

function List({product}) {
    let prod = product.map(item => 
        <ul className="Container-item" key={item.asin}>
            <li><span>Name: </span>{item.name}</li>
            <li><span>Domain:</span> {item.domain}</li>
            <li><img src={item.img} alt="product" className="Container-image"/></li>
            <li><a href={item.link} target="_blanck">Link to product</a> </li>
        </ul>
    )
  return (
      <div className="Container-list">
      {prod}
      </div> 
  );
}

export default List;
