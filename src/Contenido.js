import React, {useState} from "react";
import ReactDOM from "react-dom";

class Contenido extends React.Component {
	constructor(props) {
    	super(props);
	  	this.state={
    		estado: true,
    		estadoA: true,
    		estadoV: true
    	}

   this.handleClick = this.handleClick.bind(this);
   this.handleClickA = this.handleClickA.bind(this);
   this.handleClickV = this.handleClickV.bind(this);
  }

 	handleClick(){
  	  this.setState({
   	   estado:!this.state.estado
   	 })
	}
 	handleClickA(){
  	  this.setState({
   	   estadoA:!this.state.estadoA
   	 })
  	}

 	handleClickV(){
  	  this.setState({
   	   estadoV:!this.state.estadoV
   	 })
  	}


 render(){ 
 	return(<div className="container">
				<div className="semaforo">
					<div className={this.state.estado ? "rojoTrue": "rojoFalse"} onClick={this.handleClick}>
					</div>
					<div className={this.state.estadoA ? "amarilloTrue": "amarilloFalse"} onClick={this.handleClickA}>
					</div>
					<div className={this.state.estadoV ? "verdeTrue": "verdeFalse"} onClick={this.handleClickV}>
					</div>     				 						
				</div>
			</div>
			);
		}
}



export default Contenido;
//ReactDOM.render(<Contenido />, document.getElementById('#app'));


