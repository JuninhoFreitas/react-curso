import React, {Component} from 'react';
class App extends Component{
   constructor(props){
    super(props);
    this.state={
    };
    this.delete = this.delete.bind(this);
   }
   delete(key){
         this.props.delete(key);
   }
  
    render(){
        return(
            <div>
                {this.props.lista.map(tarefa=>{
                    return(
                    <h1 key={tarefa.key} onClick={()=>this.delete(tarefa.key)}>Nome Tarefa: {tarefa.tarefa}</h1>)
                })}
            </div>
        )
    }
}

export default App;