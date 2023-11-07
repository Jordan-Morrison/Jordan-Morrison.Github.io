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
        if (file.slice(-3) === ".md"){
            let fileContents = fs.readFileSync(`${path}/${file}`);
            fileContents = fm(fileContents.toString());
            projects.push({
                data: fileContents.attributes,
                description: fileContents.body
            });
        }
    });

    projects.sort(function(x, y) {
        if (x.data.index < y.data.index) {
          return -1;
        }
        if (x.data.index > y.data.index) {
          return 1;
        }
        return 0;
      });

    return {props : {projects}}

}