import React, {Component} from 'react';
//https://sujeitoprogramador.com/rn-api/?api=posts
class App extends Component{
   constructor(props){
    super(props);
    this.state={
        json:[]
    };
   }
   componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url).then(
        (r)=>r.json())
        .then((json)=>{
            console.log(json)
            this.setState({json: json});
        })
   }
    render(){
        return(
            <div>
              {this.state.json.map((item)=>{
                    return(

                        <article key={item.id}>
                            {item.titulo}
                            <img src={item.capa}></img>
                            </article>
                        
                    )
                })}
            </div>
        )
    }
}

export default App;