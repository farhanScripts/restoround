import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SMALL_BASE_IMAGE_URL: `${CONFIG.BASE_URL}/images/small/`,
  MEDIUM_BASE_IMAGE_URL: `${CONFIG.BASE_URL}/images/medium/`,
  LARGE_BASE_IMAGE_URL: `${CONFIG.BASE_URL}/images/large/`,
};

export default API_ENDPOINT;
