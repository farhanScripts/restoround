import RestaurantDBSource from '../../data/restaurantDB-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailsTemplate } from '../templates/template-creator';

const RestaurantDetails = {
  async render() {
    return `
      <section class="detail_wrapper" id="resto-details">
      
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const urlLink = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(urlLink.id);
    const restoContainer = document.querySelector('#resto-details');
    restoContainer.innerHTML = createRestoDetailsTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default RestaurantDetails;
