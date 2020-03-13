import React from 'react';
import './App.css';
import List from './List/List';
import Input from './Input/Input';
import Choosen from './Choosen/Choosen';



class App extends React.Component{
    constructor(){
      super();
      this.state = {
        listItem :[],
        loader: false,
        value: '',
        choosen: null,
        wrong: false,
      }
    }  
  componentDidMount() {
      const URL = 'https://demo4233545.mockable.io/products';
      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ listItem: json.products });
      });
    }
  handleChange = (e)=>{
      this.setState({ value: e.target.value});
   }
  handleSubmit = (event) => {
    event.preventDefault();  
    this.setState({ value: ''});
    const value = this.state.value.toLowerCase().trim();
    if (value !== '') {
      const filter = this.state.listItem.filter(user => {
        let item =  user.name.toLowerCase().includes(value);  
        return item ?  item :  this.setState({wrong : !this.state.wrong});
      });
      this.setState({ choosen: [...filter],loader : !this.state.loader});
    }}

  ReturnBack = () =>{
    this.setState({ loader: !this.state.loader,wrong : !this.state.wrong});
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-products">Products</h1>
          <Input value={this.state.value} handleChange={this.handleChange}  handleSubmit={this.handleSubmit}/>
        </header>
        <main className="Container">
        {
          !this.state.loader ? <List product={this.state.listItem}/> : <Choosen {...this.state} ReturnBack={this.ReturnBack}/>
        }
        </main>
         
      </div>
    )
  }
  
  }

export default App;
