export const BASE_URL = `https://api.themoviedb.org/3`;

export const URLS = {
  keyword: `${BASE_URL}/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&include_adult=false&query=`,
  year: `${BASE_URL}/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&include_adult=false&year=`,
  language: `${BASE_URL}/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&include_adult=false&with_original_language=`,
};
