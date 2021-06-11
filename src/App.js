import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1> Hello, World! </h1>
                <div>Teste 3</div>
            </div>
        );
    }
}

//export default App;
export default hot(App);

