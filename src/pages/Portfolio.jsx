import Project from "../components/Poject";

export default function Portfolio(){
    return (
        <>
        <h2>Portfolio</h2>
        <div className="row">
        <Project img="/dayjs-task-tracker_.png" name="Dayjs task tracker" repo="https://github.com/fabricioGuac/dayjs-task-tracker" link="https://fabricioguac.github.io/dayjs-task-tracker/"/>
        <Project img="/mvc-tech-blog-59iu.onrender.com_.png" name="MVC blog site" repo="https://github.com/fabricioGuac/mvc-tech-blog" link="https://mvc-tech-blog-59iu.onrender.com/"/>
        <Project img="/weather-checker.png" name="Weather checker" repo="https://github.com/fabricioGuac/weather-checker" link="https://fabricioguac.github.io/weather-checker/"/>
        <Project img="/favoriteVault.png" name="Favorite Vault" repo="https://github.com/febres0492/favorite-vault" link="https://favorite-vault.onrender.com/"/>
        <Project img="/psql-bussiness-manager.png" name="Psql bussiness manager" repo="https://github.com/fabricioGuac/psql-business-manager?tab=readme-ov-file" link="https://github.com/fabricioGuac/psql-business-manager?tab=readme-ov-file"/>
        <Project img="/blogposts.png" name="Personal blog" repo="https://github.com/fabricioGuac/personal-blog-site" link="https://fabricioguac.github.io/personal-blog-site/"/>
        </div>
        </>
    )
}
