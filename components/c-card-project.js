class CCardProject extends CCard {

    constructor() {
        super();
        this.id;
        this.name;
        this.description;
        this.logo;
        this.url;
        this.wip;
        this.languages = [];
    }

    connectedCallback() {
        var divProject = this._root.querySelector('#entity');
        divProject.style = "cursor : pointer";
        divProject.setAttribute("id", "cardProject_" + this.id);
        divProject.querySelector('#name').innerHTML =           this.name;
        divProject.querySelector('#description').innerHTML =    this.description;
        divProject.querySelector('#logo').src =                 this.logo;
        divProject.querySelector('#wip').innerHTML =            this.wip;
        divProject.querySelector('#languages').innerHTML =      this.languages;
        
        
        //divClient.querySelector('#boutonSupprimer').setAttribute("id", "boutonSupprimerClient_" + this.identification);
        //divClient.querySelector("#boutonSupprimerClient_" + this.identification).addEventListener("click", () => {this.deleteClient(this.identification)})
        
        //let adresse = document.createElement("p");
        //adresse.innerHTML = this.adresse;
        //divProject.appendChild(adresse);
    }
    
    /*deleteClient(id){
        // CONFIRM DELETION FROM USER
        if(confirm("CONFIRM DELETE " + id)) {
            // REMOVE FROM HTML (VISUALLY)
            //var toRemove = document.querySelectorAll("cc-liste-clients")[0]._root.querySelector(`[identification = ${id}]`);
            //toRemove.remove();

            // GET LOCAL CLIENTS IN LOCAL STORAGE
            var localClients = JSON.parse(localStorage.getItem("clients"));
            // DELETE CLIENT FROM LOCAL CLIENTS
            let index = 0;
            while(localClients[index] != undefined){
                if (localClients[index].id == id){
                    console.log(index);
                    localStorage.setItem("client_deleted", JSON.stringify(localClients[index]));
                    localClients.splice(index,1);
                    break;
                }
                index++;
            }
            
            // OVERWRITE LOCAL CLIENTS
            localStorage.setItem("clients", JSON.stringify(localClients));

            console.log(localClients)
            console.log(JSON.parse(localStorage.getItem("clients")))
            liste_clients.injectClients(localClients, 0);

            console.log("DELETED " + id);
        }
    }*/


    static get observedAttributes() {
        return ["id", "name", "description", "logo", "url", "wip", "languages"];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributChanged in c-card-project', name, oldValue, newValue);

        /*if (name === 'id') {
            this.id = newValue;
        }*/
        if (name === 'name') {
            this.name = newValue;
        }
        if (name === 'description') {
            this.description = newValue;
        }
        if (name === 'logo') {
            this.logo = newValue;
        }
        if (name === 'languages') {
            this.languages = newValue;
        }
        if (name === 'wip') {
            this.wip = newValue;
        }
    }
}

window.customElements.define('c-card-project', CCardProject);