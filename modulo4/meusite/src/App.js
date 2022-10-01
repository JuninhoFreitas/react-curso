import React, {Component} from 'react';
class App extends Component{
   constructor(props){
    super(props)
    this.state = {
        status:true
    };
    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
   }
   entrar() {
    this.setState({status:true});
   }    
   sair() {
    this.setState({status:false});
   }    
    render(){
        return(
            <div>
                
                {
                    this.state.status? <div><h1>Entrou</h1><button onClick={this.sair}>sair</button></div> : <div><h1>deslogado  <h1/></h1><button onClick={this.entrar}>entrar</button></div>
                }
            </div>
        )
    }
}

export default App;