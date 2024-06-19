import "../styles.css";
import "../GithubProjects";
import GitHubProjects from "../GithubProjects";
import project from "../images/project.png";

export default function Projects() {
    return (
    <div>
        <div className="smallProfileContainer">
            <h2>Github Projects</h2>
            <img src={project} className="projectsImg"/>
        </div>
        <GitHubProjects username="felixwidell" />
    </div>
    
    );
}