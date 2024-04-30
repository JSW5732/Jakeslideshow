import { LitElement, html, css } from 'lit';



export class playList extends LitElement {

  static get tag() {
    return 'play-list';
  }

  constructor(){
    super();

}

  render(){
    return html`
    <media-image></media-image>

    <button class="prev" onclick="plusSlides(-1)">&#10094;</button>
    <button class="next" onclick="plusSlides(1)">&#10095;</button>
    `
  }
  createRenderRoot(){
    return this
  }
  


}

globalThis.customElements.define('play-list', playList);
