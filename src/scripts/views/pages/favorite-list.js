const FavoriteList = {
  async render() {
    return `
      <section
        id="hero-container"
        class="hero__wrapper"
        aria-label="restaurant-image"
        tabindex="0"
      >
        <h1>FIND YOUR FAVORITE RESTAURANT IN INDONESIA!</h1>
        <p>You can add to favorite if you like</p>
      </section>
      <h1>Your Favorite Restaurant</h1>
      <section
        class="resto-list"
        id="resto-list"
        aria-label="list of restaurant"
      >

      </section>
    `;
  },

  async afterRender() {
    // TODO: dapetin list film favorit dari API
  },
};

export default FavoriteList;
