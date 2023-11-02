const fs = require('fs');
var fm = require('front-matter');
import Home from "@/components/templates/Home";

export default function Index(props) {

    return (
        <Home projects={props.projects}/>
    )
}


export async function getStaticProps() {

    const path = "components/data/projects";
    let projects = [];

    fs.readdirSync(path).forEach(file => {
        let fileContents = fs.readFileSync(`${path}/${file}`);
        fileContents = fm(fileContents.toString());
        projects.push({
            data: fileContents.attributes,
            description: fileContents.body
        });
    });

    return {props : {projects}}

}