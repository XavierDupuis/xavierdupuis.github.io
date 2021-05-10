class CCard extends HTMLElement {
    constructor() {
      super();
      this.name='parent;'
      this._root = this.attachShadow({ mode: 'open' });


        this._root.innerHTML = `<style> 
        .col-1 {
          width: 8.33%;
        }
        .col-2 {
          width: 16.66%;
        }
        .col-3 {
          width: 25%;
        }
        .col-4 {
          width: 33.33%;
        }
        .col-5 {
          width: 41.66%;
        }
        .col-6 {
          width: 50%;
        }
        .col-7 {
          width: 58.33%;
        }
        .col-8 {
          width: 66.66%;
        }
        .col-9 {
          width: 75%;
        }
        .col-10 {
          width: 83.33%;
        }
        .col-11 {
          width: 91.66%;
        }
        .col-12 {
          width: 100%;
        }
        
        
        /*cards*/
        /*.en_tete {
          margin-top: 30px;
          font-family: var(--main-font-family);
          font-size: 2em;
          text-align: left;
          padding-left: 8%;
        }*/
        
        .card {
          border-radius:6px;
          background-color: var(--main-decor-color);
          text-align: justify;
          margin:20px;
          display:flex;
          //min-width:300px;
          width: 500px;
          height: 90%;
        }

        @media only screen and (max-width: 570px) {
          .card {
            width: 90%;
          }
        }

        .card:hover{
          background-color:var(--main-decor-hover-color);
          box-shadow: 0 0 1.5rem gray;
          back
        }
        
        .img-wrapper{
          text-align:center;
          margin:auto;
          padding:20px;
        }

        .img-project {
          width:90%;
          max-width:160px;
          height:auto;
        }
        
        h3,p{
          font-family:var(--main-font-family);
          //font-weight:400;
          margin:10px 0
        }

        .container {
          padding:10px
        }

        /*.selected {
          background-color: grey;
        }*/

  </style>
        <div class="card" id="entity">
          <div class="col-4 img-wrapper">
            <img id="logo" src="./assets/PixelGalaxy.png" alt="img" class="img-project">
          </div>
          <div class="col-8">
            <header class="container">
                <h3 id="name"></h3>
            </header>
            <div class="container" id="content">
                <p id="description"></p>
                <p id="wip"></p>
                <p id="languages"></p>
            </div>
          </div>
          <div id="attachForm"></div>
        </div>`;

    }


    connectedCallback() {

    }

}
window.customElements.define('c-card', CCard);