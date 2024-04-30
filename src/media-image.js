import { LitElement, html, css } from 'lit';



export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  

  constructor() {
    super();
    this.title = "Media Image";
  }

  render(){
    return html`    <style>* {
      box-sizing: border-box;
  }
  .container {
      position: relative;
  }
  .firstImgContainter{
      display: block;
      width: 100%;
      text-align: center;
      height: 500px;
  }
  .mySlides {
      display: none;
      width: 100%;
      text-align: center;
      height: 500px;
  }
  .firstImg,
  .img{
      outline-style: solid;
      outline-width: 3px;
      outline-color: purple;
      height: 100%;
      text-align: center;
  }
  .firstImgContainter:hover,
  .img:hover{
      transform: scale(1.05);
      outline-style: solid;
      outline-width: 6px;
      outline-color: black;
      cursor: pointer;
  }
  .cursor {
      cursor: pointer;
  }
  .prev,
  .next {
      cursor: pointer-events;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      margin-top: -50px;
      color: white;
      background-color: rgba(159, 159, 159, 0.8);
      font-weight: bold;
      font-size: 20px;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
  }
  .next {
      right: 0;
      border-radius: 3px 0 0 3px;
      }
  .prev:hover,
  .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
  }
  .numbertext {
      color: black;
      font-size: 12px;
      padding: 8px 12px;
  }
  .caption-container {
      text-align: center;
      background-color: #f2f2f2;
      padding: 2px 16px;
      color: white;
  }
  .row:after {
      content: "";
      display: table;
      clear: both;
  }
  .column {
      float: left;
      width: 16.66;
  }
  .demo {
      opacity: 0.6;
  }
  .active,
  .demo:hover {
      opacity: 1;
  }</style>
  <div class="mySlides" style="display:block;">
    <div class="numbertext">1 / 6
      <br>Red Bull<br>gives you wings<br><br>
    </div>
    <img class="img" src="https://eatzpizzeria.com/wp-content/uploads/2023/05/red-bull.jpg" >
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6
    <br>Monster Energy<br>packs a punch with its bold flavors and potent caffeine kick<br><br>
    </div>
    <img class="img" src="https://m.media-amazon.com/images/I/51ZZUcrumNL._SX300_SY300_QL70_FMwebp_.jpg" >
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6
    <br>C4 Energy<br>innovative blend of ingredients designed to enhance focus and endurance<br><br>
    </div>
    <img class="img" src="https://www.elitenutritionalproducts.com/wp-content/uploads/2020/12/C4-Original.jpg" >
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6
    <br>Celcius<br>energizes with its unique combination of natural ingredients<br><br>
    </div>
    <img class="img" src="https://storage.googleapis.com/images-cub-prd-9400d55.cub.prd.v8.commerce.mi9cloud.com/product-images/detail/02ec107c-2930-40ba-958b-5ad6762fcdff.jpeg">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6
    <br>Ghost Energy<br>perfect for those looking to fuel their workouts<br><br>
    </div>
    <img class="img" src="https://m.media-amazon.com/images/I/51wTC0XCQ3L._SY300_SX300_QL70_FMwebp_.jpg">
  </div>
  
  <div class="mySlides">
    <div class="numbertext">6 / 6
    <br>Prime Hydration<br> designed to optimize performance and keep you at your best<br><br>
    </div>
    <img class="img" src="https://i5.walmartimages.com/seo/Prime-Hydration-Sports-Drink-Variety-Pack-Energy-Drink-Electrolyte-Beverage-Lemon-Lime-Tropical-Punch-Blue-Raspberry-16-9-Fl-Oz-6-Pack_89f10de7-a1db-4de6-99a0-81943caacd0e.b46f7ce23dced1fdd87cb055406ec7fa.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
  </div>  
  `;
  }
  createRenderRoot(){
    return this;
  }
}

globalThis.customElements.define('media-image', mediaImage);
