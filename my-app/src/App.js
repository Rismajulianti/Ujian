import React, {Component} from 'react';
import Background from "./bgmoss.png";
import logo from './logo.svg';
import './App.css';
import logo1 from './icon.png'


class App extends Component{
  render(){
    return(
      <div style={styles.div}>
                <div style={styles.parent}>
      </div>
        <div style={styles.content}>
        <div style={{fontSize:'10px', fontweight: 800, marginTop:28, margin: "auto", marginLeft:50, marginTop:100,}}>
        <img 
        src={logo1}
        style={{
          marginLeft:1200,
          marginTop:80,
        
        }}
        />
        </div>
        
          <div style={styles.text}>
        <h1 style={{ textAlign: "center", fontSize:'15px',  color: "#ffffff" , marginTop:10}}>Go Green</h1>
        </div>
  
          <div style={{fontSize:'25px', fontweight: 800, marginTop:28, margin: "auto"}}>
          <h1 style={{ textAlign: "center", color: "#ffffff", marginRight:500,marginLeft:500, marginTop: 250,}}>Make It Green</h1>
          </div>
        <div style={styles.subTitle}>
        <div style={{fontSize:'10px', fontweight: 800, marginTop:28, margin: "auto"}}>
        <h1 style={{ textAlign: "center", color: "#ffffff" }}>Now more than ever. Our planet is need our
</h1>
    </div>
        </div>
        <div style={styles.parentButton1}>
       <div style={styles.Readmore1}>
        Do it Now
       </div>
        </div>
    </div>
    </div>
    );
  }
}
let h = window.innerHeight;




const styles = {
  div:{
      display: "flex",
      backgroundImage: `url(${Background})`,
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
  },
  parentButton1: {
    display: "flex",
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 50,
    background: "#E67E22",
    width: "13%",
    margin: "auto",
    borderRadius: "100px",
},
Readmore1: {
    color: "#ffff",
    margin: 10,
    marginRight: "30px",
    marginLeft: "30px",
    lineHeight: "28px",
    fontSize: "20px",
    top: "5px",
    
},
  text:{
    position: "absolute",
width: "338",
height: "72",
left: "471",
top: "253",

fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "800"
  },
}


export default App;
