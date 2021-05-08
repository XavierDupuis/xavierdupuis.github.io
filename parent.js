customElements.define("cc-liste-frigos", class extends CcListeItemsParent {

    constructor() {
    super(); //heriter les attributs et methodes de HTMLElement
    super.items= [
        {
            id: 'frigo_1',
            attributs: 
            {
                nom: 'nom_frigo_1',
                adresse: 'adresse_frigo_1',
                disponibiliteh: 'disponibiliteh_frigo_1',
                nouveauteh: 'nouveauteh_frigo_1'
            },
            repas:[
                {
                    id: "repas_1",
                    attributs: 
                    {
                        nom: "nom_repas_1",
                        type: "type_repas_1",
                        portions: "portions_repas_1",
                        allergenes: "allergenes_repas_1"
                    }
                }, 
                {
                    id: "repas_2",
                    attributs: 
                    {
                        nom: "nom_repas_2",
                        type: "type_repas_2",
                        portions: "portions_repas_2",
                        allergenes: "allergenes_repas_2"
                    }
                }
            ]
        }, 
        {
            id: 'frigo_2',
            attributs: 
            {
                nom: 'nom_frigo_2',
                adresse: 'adresse_frigo_2',
                disponibiliteh: 'disponibiliteh_frigo_2',
                nouveauteh: 'nouveauteh_frigo_2'
            }
        },
        {
            id: 'frigo_3',
            attributs: 
            {
                nom: 'nom_frigo_3',
                adresse: 'adresse_frigo_3',
                disponibiliteh: 'disponibiliteh_frigo_3',
                nouveauteh: 'nouveauteh_frigo_3'
            }
        },
        {
            id: 'frigo_4',
            attributs: 
            {
                nom: 'nom_frigo_4',
                adresse: 'adresse_frigo_4',
                disponibiliteh: 'disponibiliteh_frigo_4',
                nouveauteh: 'nouveauteh_frigo_4'
            }
        },
        {
            id: 'frigo_5',
            attributs: 
            {
                nom: 'nom_frigo_5',
                adresse: 'adresse_frigo_5',
                disponibiliteh: 'disponibiliteh_frigo_5',
                nouveauteh: 'nouveauteh_frigo_5'
            }
        },{
            id: 'frigo_6',
            attributs: 
            {
                nom: 'nom_frigo_6',
                adresse: 'adresse_frigo_6',
                disponibiliteh: 'disponibiliteh_frigo_6',
                nouveauteh: 'nouveauteh_frigo_6'
            }
        }
    ];
        
    
            //defini le code encapsule'


        //cree les variables avec les fragments du code encapsule'
        this.templateContent = this._root.querySelector('#template-item').content;
        this.result = this._root.querySelector('#result');
        //



        //clone le templateContent
        const clone = document.importNode(this.templateContent, true);

        // Object.keys(item).length            

        this.items.map(item => {
            //cree une div container pour l'item
            const div_item = document.createElement("div");

            div_item.setAttribute("id", item.id);
            div_item.setAttribute("class", "horizontal-container");
            div_item.setAttribute("style", "background-color: #33b5e5;");

            //creer des balises pour les attributs de l' item
            var start = true;
            for (var i in item.attributs) {
                var balise;
                //met 'a jour le clone avec les donnees de chaque vehicule si demande'
                if (start) {
                    //cree une tag h2 pour l'attribut_1;
                    balise = document.createElement("h2");
                    balise.innerHTML = item.id;
                    balise.setAttribute("id", item.id);
                } else {
                    //cree une tag h2 pour l'attribut_1;
                    balise = document.createElement("p");
                    balise.innerHTML = item.attributs[i];
                }
                start = false;


                balise.setAttribute("class", "horizontal-grid-item");
                //ajoute la balise au container
                div_item.appendChild(balise);
                
                div_item.addEventListener("click", function () {
                    this.dispatchEvent(new CustomEvent('send',{detail: {message:item.repas} }))
                    console.log("AAAAAAAAAA");
                    console.log("event");
                    document.getElementsByClassName("grid-item")[0].innerHTML="<cc-liste-repas></cc-liste-repas>"        

                });

                div_item.addEventListener("hover", function () {
                    this.setAttribute("class", "horizontal-container hover");
                });

            }
            //ajoute le container au clone
            clone.appendChild(div_item);

        });
        //ajoute le clone au shadow DOM
        this.result.appendChild(clone);

        //customElements.define()
    }})






    customElements.define("cc-liste-repas", class extends CcListeItemsParent{
    
        constructor() {
        super(); //heriter les attributs et methodes de HTMLElement
        let jData;
        $.ajaxSetup({
            async: false
        });
        $.getJSON('./frigos.json', function(data) {
            jData=data;
        })
        super.items= jData;
    
            //defini le code encapsule'
         
            //cree les variables avec les fragments du code encapsule'
            this.templateContent = this._root.querySelector('#template-item').content;
            this.result = this._root.querySelector('#result');
            //
    
    
            //clone le templateContent
            const clone = document.importNode(this.templateContent, true);
    
            // Object.keys(item).length            
    
            this.items.map(item => {
                //cree une div container pour l'item
                const div_item = document.createElement("div");
    
                div_item.setAttribute("id", item.id);
                div_item.setAttribute("class", "horizontal-container");
                div_item.setAttribute("style", "background-color: #33b5e5;");
    
                //creer des balises pour les attributs de l' item
                var start = true;
                for (var i in item.attributs) {
                    var balise;
                    //met 'a jour le clone avec les donnees de chaque vehicule si demande'
                    if (start) {
                        //cree une tag h2 pour l'attribut_1;
                        balise = document.createElement("h2");
                        balise.innerHTML = item.id;
                        balise.setAttribute("id", item.id);
                    } else {
                        //cree une tag h2 pour l'attribut_1;
                        balise = document.createElement("p");
                        balise.innerHTML = item.attributs[i];
                    }
                    start = false;
    
    
                    balise.setAttribute("class", "horizontal-grid-item");
                    //ajoute la balise au container
                    div_item.appendChild(balise);
                    div_item.addEventListener("click", function () {
                        this.setAttribute("class", "horizontal-container selected");
                        console.log(this.innerText);
                    });
    
                    div_item.addEventListener("hover", function () {
                        this.setAttribute("class", "horizontal-container hover");
                    });
    
                }
                //ajoute le container au clone
                clone.appendChild(div_item);
    
            });
            //ajoute le clone au shadow DOM
            this.result.appendChild(clone);
            //this.hidden=true;
    
        }
    
    
    })