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
          font-family: Arial, Helvetica, sans-serif;
          font-size: 200%;
          padding-top: 20px;
        }

        #titre {
          padding-left: 15%;
        }

        </style>
        <div class="en-tete col-6" >
          <spam id="titre"></spam>
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






