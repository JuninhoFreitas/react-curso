import React, {Component} from 'react';
import TodoItems from '../TodoItems';
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        tarefa: '',
        items:[]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
   }
   deleteItem(key){
        const removedList = this.state.items.filter(item=>{
           return item.key !== key;
        })
        this.setState({items: removedList});

   }
   addItem(e){
    let state = this.state;
    if(this._tarefaInput.value != ''){
        this.setState( {items:[...state.items, {
            key: Date.now(),
            tarefa: this._tarefaInput.value
        }]});
        console.log(this.state)
        this.state.tarefa = ''
    }
    e.preventDefault();
   }
    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                   <input  type="text" 
                   placeholder='Nova Tarefa' 
                   name='tarefa' 
                   value={this.state.tarefa}
                   onChange={(e)=>this.setState({tarefa: e.target.value})}
                   ref={(e) => this._tarefaInput = e}
                   ></input>
                   <button 
                   type="submit">
                        Adicionar
                   </button>
                </form> 
                <TodoItems lista={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}

export default App;