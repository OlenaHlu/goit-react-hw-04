import axios from "axios";

const API_KEY = "WOfkb1H9YtW-8IurrbIImlLbSoPzdgRWtq5GrZREa4g";
const BASE_URL = "https://api.unsplash.com";

const fetchImages = async (request, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query: request,
        page: page,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export default fetchImages;
