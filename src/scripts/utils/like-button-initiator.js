import favoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeButton,
  createLikedButton,
} from '../views/templates/template-creator';

const likeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();
    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();
    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
