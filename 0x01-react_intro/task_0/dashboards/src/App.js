/* eslint-disable jsx-ally/alt-text */
import logo from "./Holberton_logo.jpg";
import "./App.css";

function App(){
    return (
        <>
        <div class="App-header">
            <img src={logo} />
            <h1>School dashboard</h1>
        </div>
    
        <div class="App-body">
            <p>Login to access the full dashboard</p>
        </div>

        <div class="App-footer">
            <p>Copyright 2020 - holberton School</p>
        </div>
        
        
        </>
    );
}

export default App;
