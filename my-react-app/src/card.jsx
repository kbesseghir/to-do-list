import './index.css'
import  PropTypes from'prop-types'
function Card(props){
    const handalclick = (count) =>{
        count ++;
        console.log(`u heart me ${count} times` )
    }
return(
    <>
         {props.isLogged ? (
        <div className="card">
          <img src="path_to_image" alt={`${props.nom}'s picture`} />
          <h1>{props.nom}</h1>
          <p>Hi, my name is {props.nom} and my age is {props.age}.</p>
          <button onClick={() => handalclick(0)}>click me </button>
        </div>
      ) : (
        <h3>You are not logged in</h3>
      )}

    </>
)

}
Card.PropTypes={
    isLogged: PropTypes.bool,
    nom: PropTypes.string,
    age: PropTypes.number,
      

}
Card.defaultProps = {
    isLogged : true,
    nom: "guest",
    age:0

}
export default Card ;