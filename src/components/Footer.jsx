import { FaGithub, FaLinkedin, FaStackOverflow  } from "react-icons/fa"

export default function Footer() {
    return (
<footer className="d-flex justify-content-center display-3">
    <div className="icons">
    <a href="https://github.com/fabricioGuac" target="_blank"><FaGithub  /></a>
    <a href="https://www.linkedin.com/in/fabricio-guacuto" target="_blank"><FaLinkedin  /></a>
    <a href="https://stackoverflow.com/questions" target="_blank"><FaStackOverflow  /></a>
    </div>
</footer>
    )
}