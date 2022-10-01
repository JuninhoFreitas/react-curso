import React, {Component} from 'react';
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        email:'j@j.com',
        senha:'',
        sexo: 'Masculino'
    };
    this.trocaValue = this.trocaValue.bind(this)
   }
   trocaValue(e){
    console.log(e)
        let valorDigitado = e.target.value;
        this.setState({[e.target.name]:valorDigitado});
        console.log(this.state)
   }
    render(){
        return(
            <div>
                Email:
                <input type="email" name="email" value={this.state.email} 
                onChange={this.trocaValue}
                /><br/>
                Senha:
                <input type="password" name="senha" value={this.state.senha} 
                onChange={this.trocaValue}
                />
                <br/>

                <select name="sexo" value={this.state.sexo} onChange={this.trocaValue}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                
            </div>
        )
    }
}

export default App;