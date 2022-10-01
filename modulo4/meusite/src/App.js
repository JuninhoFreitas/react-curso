import React, {Component} from 'react';
const HelloWorld = (props)=>{
    return(
        <div>
            <h1>{props.frase}</h1>
        </div>
    )
}
class HeadNome extends Component{    
        render(){
            return(
                <div>
                    <h1>{this.props.nome}</h1>
                </div>
            );
        }
}
class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }
    aumentar(){
        let state = this.state;
        state.contador ++;
        this.setState({contador: state.contador})
    }
    diminuir(){
        let state = this.state;
        state.contador --;
        this.setState({contador: state.contador})
    }
    render(){
        return (
        <div>
            <h3>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>
            </h3>
        </div>
    );
}
}

class App extends Component{
    render(){
        return(
            <div>
                <HelloWorld frase="Hello World" />
                <HeadNome nome="Juninho" />
                <Contador/>
            </div>
        )
    }
}

export default App;