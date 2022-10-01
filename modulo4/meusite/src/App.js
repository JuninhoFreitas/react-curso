import React, {Component} from 'react';
import './estilo.css'
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        textoFrase:'',
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = ['Frase1', 'frase2', 'frase3']
}
quebraBiscoito(){
    const randomInt = Math.floor(Math.random() * this.frases.length);
    console.log(randomInt)
    this.setState({textoFrase:this.frases[randomInt]});
}
    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App;