import "bootstrap/dist/css/bootstrap.min.css";

const Doxes = (props) => {
    console.log(props)
    return (
        <ul className="list-group">
            {
                props.doxes.map(dox => (
                    <li className="list-group-item">{dox.id}</li>
                ))
            }
        </ul>
    )
}

export default Doxes;