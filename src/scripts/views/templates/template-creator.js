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
/*
  | details_resto
    | gambar resto
    | nama resto
    | Rating
    | Lokasi
    | Kota
    | Deskripsi Full
    | Resto Menu
    | Add To Favorite Button
    | Comments Section
    */
const createMenuItems = (items) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  items.map((item) => `<li>${item.name}</li>`).join('');

const createCommentsItems = (comments) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  comments.map(
    (comment) => `
    <div class="comments">
      <h1>${comment.name}</h1>
      <p>${comment.date}</p>
      <p>${comment.review}</p>
    </div> 
    `
  );
// eslint-disable-next-line no-unused-vars
const createRestoDetailsTemplate = (resto) => `
  <section class="resto_wrapper" aria-label="Restaurant Information">
    <div class="img_resto_container">
      <img class="img_resto" src="${
        API_ENDPOINT.MEDIUM_BASE_IMAGE_URL + resto.pictureId
      }" alt="restaurant-image" />
    </div>

    <div class="resto_details">
      <h1 class="resto_name">${resto.name}</h1>
      <div class="resto_information">
        <h3>Location</h3>
        <p>${resto.address}</p>
        <h3>City</h3>
        <p>${resto.city}</p>
        <h3>Description</h3>
        <p>${resto.description}</p>
      </div>
    </div>
  </section>
  <hr>
  <section class="menu_wrapper" id="menu_wrapper">
      <div>
        <h1 class="menu_detail">Our Menus</h1>
        <ul id="menu_list">
          ${createMenuItems(resto.menus.foods)}
        </ul> 
      </div>
      <div>
        <h1 class="drink_detail">Our Drinks</h2>
        <ul id="drinks_list">
          ${createMenuItems(resto.menus.drinks)}
        </ul> 
      </div>
  </section>

  <section class="comments_wrapper">
    <h1>Customer reviews</h1>
    ${createCommentsItems(resto.customerReviews)}
  </section>
`;

export { createRestoCardTemplate, createRestoDetailsTemplate };
