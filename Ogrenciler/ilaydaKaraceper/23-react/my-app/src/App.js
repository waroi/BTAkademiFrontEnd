
import './App.css';
import {ListItem } from "./components/ListItem";
 function App() {
  const data = [
    {
      id: 1,
      name: "varol",
      status: "success",
      age: 65
    },
    {
      id: 2,
      name: "İlayda",
      status: "primary",
      age: 22
    },
    {
      id: 3,
      name: "Ersan",
      status: "primary",
      age: 43,
    },
    {
      id: 4,
      name: "ali",
      status: "primary",
      age: 70,
    },
  ];
  const getStatus = (item) => {
    if(item.age<= 40){
      return "minimal";
    }
    if(item.age<= 50){
      return "medium";
    }
    if (item.age > 50) {
      return "high";
    }
  };
const StyledButton = styled.button`
color: #5c01a1;
background: #90e1a1;
font-size: 20px;
border: none;
outline: none;
padding: 8px 16px;
cursor: pointer;
;`
const SecondaryButton = styled(StyledButton)`
color: #50f1a1;
background: #1a81a1;
font-size:${(props)=>props.size?`${props.size}px`: "16px"};
`;
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className= {`riskStatus ${getStatus(item)}`}>
            <p>
              {item.name} - yaş durumuna göre risk: {getStatus(item)} - Yaş;
              {item.age}
            </p>
            </div>
        );
      })}
      <hr />
      <button> Deneme button</button> 
      <hr/>
      <StyledButton>StyledButton</StyledButton>
      <SecondaryButton size="30" >SecondaryButton</SecondaryButton>
      <hr />
      {data.map((item, index) =>{
        return <div className = {styles [item.status]}> {item.name}</div>;
      })}
      </div>
    //   <ul>
    //     {data.map((data, index) => (
    //       <ListItem key={index} name={data.name} color1={data.color1} color2={data.color2} width={data.w} itemId={data.Id}/>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;



