class CCard extends HTMLElement {
    constructor() {
      super();
      this.name='parent;'
      this._root = this.attachShadow({ mode: 'open' });


        this._root.innerHTML = `<style> 
        
        /* grid */
        * {
          box-sizing: border-box;
        }
        
        .row::after {
          content: "";
          clear: both;
          display: table;
        }
        
        [class*="col-"] {
          float: left;
        }
        
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
        .en_tete {
          margin-top: 30px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 2em;
          text-align: left;
          padding-left: 8%;
        }
        
        .card {
          margin-left: 15% !important;
          margin-right: 20% !important;
          margin-top: 5% !important;
          margin-bottom: 1% !important;
          background-color: lightgray;
        }
        
        .imgProject {
          height:auto;
          padding-top:20%;
          max-width:160px;
          width:90%;
        }
  
        h3,p{
          font-family:"Segoe UI",Arial,sans-serif;
          font-weight:400;margin:10px 0
        }

        .container {
          padding:0.01em 16px
        }

        .selected {
          background-color: grey;
        }

  </style>
        <div class="row card" id="entity">
          <div class="col-3">
            <img id="logo" src="./assets/PixelGalaxy.png" alt="img" class="imgProject">
          </div>
          <div class="col-9">
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