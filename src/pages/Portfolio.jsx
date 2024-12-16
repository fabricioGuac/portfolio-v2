import Project from "../components/Project";

export default function Portfolio() {
    const projects = [
        {
            img: "/tumorido.png",
            name: "Tumorido fittrack",
            repo: "https://github.com/fabricioGuac/tumorido-fittrack",
            link: "https://tumorido-fittrack.onrender.com",
        },
        {
            img: "/3dPortfolio.png",
            name: "Portfolio3D",
            repo: "https://github.com/fabricioGuac/portfolio-3D",
            link: "https://portfolio-3d-49ab.onrender.com/",
        },
        {
            img: "/BookGQL.png",
            name: "Book GraphQL API refactor",
            repo: "https://github.com/fabricioGuac/book-api-refactor-graphql",
            link: "https://book-api-refactor-graphql.onrender.com",
        },
        {
            img: "/Blackjack.png",
            name: "Blackjack",
            repo: "https://github.com/fabricioGuac/java-blackjack",
        },
        {
            img: "/dayjs-task-tracker.png",
            name: "Dayjs Task Tracker",
            repo: "https://github.com/fabricioGuac/dayjs-task-tracker",
            link: "https://fabricioguac.github.io/dayjs-task-tracker/",
        },
        {
            img: "/weather-checker.png",
            name: "Weather Checker",
            repo: "https://github.com/fabricioGuac/weather-checker",
            link: "https://fabricioguac.github.io/weather-checker/",
        },
    ];

    return (
        <>
            <h2 className="text-center mb-4">Portfolio</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        img={project.img}
                        name={project.name}
                        repo={project.repo}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    );
}
