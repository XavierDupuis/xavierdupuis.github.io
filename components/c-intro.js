class CIntro extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this.content = JSON.parse(localStorage.getItem("content"));
        
        this._root.innerHTML = `
            <style>  
            .intro {
              font-family: var(--main-font-family);
              font-size: 120%;
              padding-top: 20px;
              text-align:center;
            }

            hr {
              height: 3px;
              width: 150px;
              border-radius: 5px;
              background:var(--main-decor-color);
              border: none;
            }

            </style>
            <div class="intro">
                <h1 id="name"></h1>
                <hr>
                <div id="intro-lines"></div>
                <hr>
            </div>
        `;
        this.injectContent(this.content);
    }
  
    static get observedAttributes() {
        return ;
    }

    injectContent(content){
        this._root.querySelector('#name').innerHTML = this.content.name;
        let introlines = (navigator.language == "en")? content.intro["en"] : content.intro["fr"];
        for(let i = 0; i < introlines.length; i++){
            let line = document.createElement("p");
            line.innerHTML = introlines[i];
            this._root.querySelector('#intro-lines').appendChild(line)
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributChanged', name, oldValue, newValue);
  
      if (name === ""/**/) {
        //this."" = parseInt(newValue);
      }
    }
  }
  
window.customElements.define('c-intro', CIntro);