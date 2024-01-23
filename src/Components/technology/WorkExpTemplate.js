
function WorkTitle(props) {
    return (
        <div >
            <p>{props.title}</p>
        </div>
    )
}

function WorkExpTemplate(props) {
    return (
     <>
        <WorkTitle title={props.name} />
        <p>Testing {props.description} </p>
        <p>{props.category}</p>
     </>   
    )
}

export default WorkExpTemplate;