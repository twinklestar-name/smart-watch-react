import React,{Component} from 'react';
import './App.css';
import ProductData from './ProductData';

class App extends Component {

  state={
    showHeart:true,
    mainImageUrl:ProductData.colorOptions[0].imageUrl,
    currentPos:0
  }

  date=new Date();
  hour=this.date.getHours();
  min=this.date.getMinutes();

  heartRateBtnClick=()=>{
    this.setState({showHeart:false})
  }
  timeBtnClick=()=>{
    this.setState({showHeart:true})
  }

  colorCard = (pos) =>{
    this.setState({mainImageUrl:ProductData.colorOptions[pos].imageUrl})
    this.setState({currentPos:pos})
    console.log(this.state.currentPos)
  }


 render(){
    const colors= ProductData.colorOptions.map((item,pos)=>{
  console.log(item)
  console.log(pos)
  return(
    <div key={item.id} className={['styles',pos===this.state.currentPos?'active':'styles'].join(" ")} onClick={()=>this.colorCard(pos)}>
    <h4>{item.styleName}</h4>
    <img className="options" src={item.imageUrl} alt={item.styleName}/>
    </div>
  )
  })

  return (
    <div className="App">
      <div><img className="main-img" src={this.state.mainImageUrl} alt=""/></div>
      {this.state.showHeart?<p className="time">{this.hour} :  {this.min}</p>:<div><img className="heart" src='https://i.imgur.com/dtevMBk.png' alt='heart'/><p className="heart-rate">75</p></div>}
    <div className="description">
    <h3>{ProductData.title}</h3>
    <p>{ProductData.description}</p>
    <h4>Select Colour</h4>
    {colors}
    <h4>Features</h4>
    <button onClick={this.timeBtnClick}  className="buy">{ProductData.featureList[0]}</button>
    <button onClick={this.heartRateBtnClick}  className="buy">{ProductData.featureList[1]}</button>
    <button className="buy">Buy Now</button>
    </div>
    </div>
  );
  }
}

export default App;
