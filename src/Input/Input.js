import React from 'react';

function Input(props)  {
    return (
      <form className="App-search"  onSubmit={(e) => props.handleSubmit(e)}>
      <input type="text" placeholder="Find your product"  value={props.value}  onChange={(e) => props.handleChange(e)}/>
     </form>   
    );
}

export default Input;