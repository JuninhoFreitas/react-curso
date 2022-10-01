import React, {Component} from 'react';

const Lista = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        listaDePessoas:[
            {id:1, name: 'Juninho', age:20},
            {id:2, name: 'Elieser', age:20},
            {id:3, name: 'Oscar', age:25},
        ]
    };
   }
    render(){
        return(
            <div>
                {this.state.listaDePessoas.map((pessoa)=>{
                    return(<Lista key={pessoa.id} name={pessoa.name} age={pessoa.age}/>)
                })}
            </div>
        )
    }
}

export default App;