import './App.css';
import Muz from './components/Muz';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    muz: state.muz
  }
}

function App(props) {
  return (
    <div className="App">
      <h1>AppJS</h1>
      <Muz />
      <h3>AppJS Butonları</h3>
      <button onClick={()=> props.dispatch({type: "EKLE"})}>Artır</button>
      <button onClick={()=> props.dispatch({type: "CIKAR"})}>Azalt</button>
    </div>
  );
}

export default connect(mapStateToProps,null)(App);
