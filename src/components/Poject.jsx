export default function Project(props){

    return (
    <div className="col-md-6">

        <img src={props.img} alt={props.name} />
        <a href={props.link} target="_blank"><h3>{props.name}</h3></a>
        <a href={props.repo} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/100px-GitHub_Invertocat_Logo.svg.png" alt="Github logo" /></a>

    </div>
)
}