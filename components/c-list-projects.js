class CListProjects extends CList {

    constructor() {
        super();
        this.nProjects = 0;
    }

    connectedCallback() {
        this.projects = JSON.parse(localStorage.getItem("projects"));
        this.injectProjects(this.projects);
    }

    injectProjects(projects){
        this._root.querySelector('#titre').innerHTML = "Projects";
        if (!projects || projects.length==0 ) {
            this.shadowRoot.querySelector("#attachListe").innerHTML = "";
            console.log("NO PROJECTS")
            return;
        }

        this.result = this._root.querySelector('#attachListe')
        this.result.innerHTML = "";

        for (var i = 0; i < projects.length; i++) {
            var project = projects[i];
            var divProject = document.createElement("c-card-project");
            divProject.setAttribute("id",            this.nProjects++);
            divProject.setAttribute("name",          project.name);
            divProject.setAttribute("description",   project.description);
            divProject.setAttribute("url",           project.url);
            divProject.setAttribute("wip",           project.wip ? 'Project is work in progress (WIP)' : 'Project is completed');
            divProject.logo = project.logo;
            divProject.url = project.url;
            let languages = "";
            if(!project.languages || project.languages.length == 0) {
                languages = "Unspecified";
            }
            else {
                languages = project.languages[0];
                if (project.languages.length > 1){
                    for (var j = 1; j < project.languages.length - 1; j++) {
                        languages += ", " + project.languages[j];
                    }
                    languages += " and " + project.languages[project.languages.length - 1];

                }
            }
            divProject.setAttribute("languages", languages);
            
            divProject.addEventListener("click", function () {
                console.log(this.url);
                //window.open(this.url);
            });
                /*this.projects = JSON.parse(localStorage.getItem("projects"));//prend les projects du localStorage
                var projectID = this.id;//prend l'id du project sur cette fiche
                var thisproject;
                if (!this.projects || this.projects.length==0 ) {//echappe
                    return;
                }
                for (let project of this.projects) {//prendre le project en question
                    if (project.id == projectID) {
                        thisproject = project;
                        break;
                    }
                }
                //selection exclusive
                let projects = liste_projects.shadowRoot.querySelectorAll("cc-fiche-project");//prend tous les elements dans cette meme div
                for (let project of projects) {
                    project.shadowRoot.children[1].setAttribute('class', 'row card');//defait toutes les selections
                }
                this.shadowRoot.children[1].setAttribute('class', 'row card selected');//selectionne celui sur lequel on a cliqueh 
                localStorage.setItem("project_selectionneh", JSON.stringify(thisproject));//enregistre le project selectionneh dans le localstorage
                
                liste_etudes.injectEtudes(thisproject.etudes, 0);//injecte les etudes du project sur cette ficheproject
            });*/

            if(project.show){
                this.result.appendChild(divProject);
            }
        }
    }
}

window.customElements.define('c-list-projects', CListProjects);