import React, {Component} from 'react';
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        nome:'',
        email:'',
        senha:'',
    };
    this.changeValue=this.changeValue.bind(this);
    this.cadastrar=this.cadastrar.bind(this);
   }
   cadastrar(e){
        if(!this.state.nome || !this.state.email || !this.state.senha) {
            this.setState({error:'Ta faltando algo ai'})
        }else{
            this.setState({error:''})
        };
       console.log(this.state)
       e.preventDefault(); //Aqui ele não atualiza a pagina

   }
   changeValue(e){
    this.setState({[e.target.name]:e.target.value});
   }
    render(){
        return(
            <div>
                <h1>Meu Projeto</h1>
                {this.state.error&&<h1>{this.state.error}</h1>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input name="nome" type="text" value={this.state.nome} onChange={this.changeValue}></input>
                    <br/><label>Email:</label>
                    <input name="email" type="text" value={this.state.email} onChange={this.changeValue}></input>
                    <br/><label>Senha:</label>
                    <input name="senha" type="password" value={this.state.senha} onChange={this.changeValue}></input>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default App;