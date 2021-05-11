class CList extends HTMLElement {
  constructor() {
    super();
    this.name='parent;'
    this._root = this.attachShadow({ mode: 'open' });

    this.items = [];
    //this.item_selectionneh=0;

    this._root.innerHTML = `
        <style>  
        .en-tete {
          font-family: var(--main-font-family);
          padding-top: 20px;
        }

        #titre {
          
        }

        #attachListe {
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          //align-items:stretch;
        }       
        
        #attachListe > c-card-project{
          //align-items:stretch;
        }

        </style>
        <div class="en-tete col-6" >
          <h2 id="titre"></h2>
        </div>
        <div id="attachListe"></div>
        <div id="attachForm"></div>
    `;
  }

 
  static get observedAttributes() {
    return ["item_selectionneh"];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributChanged', name, oldValue, newValue);

    if (name === ""/**/) {
      //this."" = parseInt(newValue);
    }
  }
}

window.customElements.define('c-list', CList);






