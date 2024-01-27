
function WorkTitle(props) {
    return (
        <>
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.time}</p>
        </>
    )
}

function WorkCategories(props) {
    console.log(props)
    return props.category.split(',').map((category, index) => (
        <p key={index}>{category}</p>
    ))
}

function WorkExpTemplate(props) {
    return (
     <>
        <WorkTitle 
            title={props.jobtitle}
            job={props.job}
            time={props.time}
        />
        <p>Testing {props.description} </p>
        <WorkCategories category={props.categories} />
     </>   
    )
}

export default WorkExpTemplate;