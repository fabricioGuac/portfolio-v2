import { FaGithub  } from "react-icons/fa"

export default function Project(props){

    return (
    <div className="col-md-6">

        <img src={props.img} alt={props.name} />
        <a href={props.link} target="_blank"><h3>{props.name}</h3></a>
        <a href={props.repo} target="_blank"><FaGithub className="display-3"/></a>

    </div>
)
}