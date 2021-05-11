class CNavBar extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        
        this._root.innerHTML = `
            <style>  
            .navbar {
                z-index = 1;
                display:flex;
                justify-content:space-between;
                text-decoration: none;
                font-family: var(--main-font-family);
                color:var(--main-fonts-color);
                font-size: 200%;
                padding: 20px;
                padding-left: 10%;
                padding-right: 10%;
                text-transform:uppercase;
                
            }
            
            .button {
                text-decoration:none;
                margin:10px;
            }

            .button:hover {
                color:var(--main-decor-hover-color);
            }
          
            </style>
            <div class="navbar">
                <div>
                    <a class="button" id="home" href="#intro">       
                        Bienvenue
                    </a>
                    <a class="button" id="projects" href="#projects">   
                        Projets
                    </a>
                    <a class="button" id="background"  href="#background"> 
                        Cheminement
                    </a>
                    <a class="button" id="contact" href="#contact">    
                        Contact
                    </a>
                </div>
                <div>
                    <a class="button">FR</a>
                    <a class="button">EN</a>
                </div>
            </div>
        `;
    }
  
    static get observedAttributes() {
        return ;
    }
  
  
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributChanged', name, oldValue, newValue);
  
      if (name === ""/**/) {
        //this."" = parseInt(newValue);
      }
    }
  }
  
window.customElements.define('c-navbar', CNavBar);