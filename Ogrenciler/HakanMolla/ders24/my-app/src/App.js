import React from 'react';
import  { useState,  } from "react";
import './App.css';
// import  Test from "./components/test"
// import  {ListItem} from "./components/listItem"
import styled from 'styled-components'
import styles from './CustomStyle.module.css'

function App() {
  // let name="hakan"
  // let id="5"
  // let color="white"

  // const students=[
  //   "Varol",
  //   "Ilayda",
  //   "Hakan",
  //   "Barıs",
  //   "Esma",
  //   "Ersan",
  //   "Serhat"]


    // const data = [
    //   {
    //     id: 1,
    //     name: "Beşiktaş",
    //     color1: "Black",
    //     color2: "White",
    //     w: 300,
    //   },
    //   {
    //     id: 2,
    //     name: "Galatasaray",
    //     color1: "Red",
    //     color2: "Yellow",
    //     w: 300,
    //   },
    //   {
    //     id: 3,
    //     name: "Fenerbahçe",
    //     color1: "Blue",
    //     color2: "Yellow",
    //     w: 300,
    //   },
    // ];

    const [data, setData] = useState([
      {
        id: 1,
        name: "Varol",
        status: "success",
        age: 65,
      },
      {
        id: 2,
        name: "Ilayda",
        status: "error",
        age: 20,
      },
      {
        id: 3,
        name: "Esma",
        status: "success",
        age: 21,
      },
      {
        id: 4,
        name: "Ersan",
        status: "primary",
        age: 43,
      },
    ]);

const getStatus=(item)=>{
  if(item.age<=40){
    return "minimal"
  }
  if(item.age<=50){
    return "medium"
  }
  if(item.age>60){
    return "high"
  }
}

const StyledButton = styled.button`
color:#5c01a1;
background:#90e1a1
font-size:20px;
border:none;
outline:none;
padding:8px 16px;
cursor:pointer;
`

const SecondaryButton=styled(StyledButton)`
color:#5c01a1;
background:#1f61a1;
font-size:${(props)=>(props.size?`${props.size}px` :"16px")}
` 

  return (
    <div className="App">
     {/* <h1 style={{background:"red",color:color}}>Test Uygulaması</h1>
     <Test isim={name} id={id}/>
    <ul>
    {students.map((student,index)=>(
    <ListItem key={index}student={student}/>))}
    </ul> */}

{data.map((item,index)=>{
  return (<div key={index} className={`riskStatus ${getStatus(item)}`}>
    <p>{item.name}- Yaş Durumuna Göre Risk : {getStatus(item)} - Yaş:{item.age}</p>
  </div>)
})}

<hr />  

<button>Deneme Button</button>

<hr />  
<StyledButton>Style*Button</StyledButton>
<SecondaryButton size="35">Style*Button</SecondaryButton>


<hr/>

<div className={styles.moduleScc}>Merhabalar</div>
<button className={styles.customButton}>Selam Tıkla</button>
<hr />
{data.map((item,index)=>{
  return <div className={styles[item.status]}>{item.name}</div>
})}

    </div>
  );
}




export default App;
