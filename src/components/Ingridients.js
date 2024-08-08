export default function Ingridients(props) {
    return (
        <>{props.ingridients.map(el => <li key={el}>{el}</li>)}
           
        </>
    )
}