import RestaurantDBSource from '../../data/restaurantDB-source';
import UrlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import {
  createLikeButton,
  createRestoDetailsTemplate,
} from '../templates/template-creator';

const RestaurantDetails = {
  async render() {
    return `
      <section class="detail_wrapper" id="resto-details">
      
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getRestoDetails = await RestaurantDBSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto-details');
    restoContainer.innerHTML = createRestoDetailsTemplate(getRestoDetails);
    likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: getRestoDetails.id,
        name: getRestoDetails.name,
        description: getRestoDetails.description,
        address: getRestoDetails.address,
        city: getRestoDetails.city,
        rating: getRestoDetails.rating,
        imageId: getRestoDetails.pictureId,
      },
    });
  },
};

export default RestaurantDetails;
