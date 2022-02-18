
const Doxes = (props) => {
    console.log(props)
    return (
        <ul>
            {
                props.doxes.map(dox => (
                    <li>{dox._id}</li>
                ))
            }
        </ul>
    )
}

export default Doxes