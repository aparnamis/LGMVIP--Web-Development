import React,{Component} from "react";
import "./App.css";
import Cards from "./components/Cards";


class App extends Component {
  constructor(props){
	super(props)
		

	this.state = {users_data :([]),
                loading : false                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){

    this.setState({loading: true});

      setTimeout(async function(){
    
      const response=await fetch("https://reqres.in/api/users?page=1");
      const jsonresponse=await response.json();
      console.log(jsonresponse)
      this.setState({users_data:jsonresponse["data"],loading:false});
      }.bind(this),2000);
  }
    
  render(){
  return (
    <>
    <nav className="navbar">
    <div className="navitems">
      <h2>LetsGrowMore</h2>
      <button className="fetchbtn" onClick={this.updateState}><b>Get Users</b></button>
    </div>
  </nav>
  <div className="userdatacontainer">
    <Cards loading={this.state.loading} users={this.state.users_data}/>
  </div>

  </>
  );
  }
}

export default App;