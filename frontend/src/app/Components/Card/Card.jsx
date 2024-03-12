import './Card.css'

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.src} alt={props.alt} />
            <span>{props.title}</span>
            <p>{props.description}</p>
        </div>
        
    )
}