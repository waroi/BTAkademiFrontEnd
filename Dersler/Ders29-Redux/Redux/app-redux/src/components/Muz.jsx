import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    muz: state.muz
  }
}

const Muz = (props) => {
  return (
    <div>
      <h1>Muz</h1>
      <h2>Muz sayısı: {props.muz}</h2>

      <button onClick={()=> props.dispatch({type: "EKLE"})}>Artır</button>
      <button onClick={()=> props.dispatch({type: "CIKAR"})}>Azalt</button>
    </div>
  )
}

export default connect(mapStateToProps,null)(Muz);