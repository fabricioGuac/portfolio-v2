import { FaGithub } from "react-icons/fa";

export default function Project({ img, name, repo, link }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={img} alt={name} className="card-img-top" />
                <div className="card-body text-center">
                    <h3 className="card-title">{name}</h3>
                    <div className="d-flex justify-content-center">
                        {link ? (
                            <a href={link} target="_blank" className="btn btn-primary me-2">
                                View Live
                            </a>
                        ) : (
                            <span className="text-muted me-2">Not deployed</span>
                        )}
                        <a href={repo} target="_blank" className="btn btn-secondary">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
