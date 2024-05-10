/* eslint-disable indent */
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestoCardTemplate = (resto) => `
  <div class="resto-card" aria-label="resto card" tabindex="0">
      <div class="img-box" tabindex="0">
        <p class="resto_rating">
          ${resto.rating}
        </p>
        <img
          src="${API_ENDPOINT.MEDIUM_BASE_IMAGE_URL + resto.pictureId}"
          alt="resto-image"
          width="100%"
        />
      </div>
      <div class="content" tabindex="0">
        <div class="resto_info">
          <p class="resto_loc">${resto.city}</p>
          <h1 class="resto_name">
          <a href="/#/detail/${resto.id}" class="details_anchor">${
  resto.name
}</a></h1>
          <p class="resto_desc">
            ${resto.description}
          </p>
        </div>
      </div>
    </div>
  `;

// eslint-disable-next-line no-unused-vars
const createRestoDetailsTemplate = (resto) => `
  <div class="container_detail_resto">
    <div class="container_resto_info">
      <div class="img-info">
        <img src="${
          API_ENDPOINT.MEDIUM_BASE_IMAGE_URL + resto.pictureId
        }" width="100px"/>
      </div>
      <div class="resto_info">
        <p>test</p>
        <p>HELLOOOOO</p>
      </div>
    </div>

    
  </div>
`;

export { createRestoCardTemplate, createRestoDetailsTemplate };
