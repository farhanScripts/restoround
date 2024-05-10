import RestaurantDBSource from '../../data/restaurantDB-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailsTemplate } from '../templates/template-creator';

const RestaurantDetails = {
  async render() {
    return `
      <section class="detail_wrapper" id="resto-details">
      
      </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getRestoDetails = await RestaurantDBSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto-details');
    restoContainer.innerHTML = createRestoDetailsTemplate(getRestoDetails);
  },
};

export default RestaurantDetails;
