export default class ImdbService {
  static async getMovieList(searchBy, value, order) {
    const response = await fetch(`http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${searchBy}&sortBy=${order}&sortOrder=asc`);
    return await response.json();
  }

  static async getMovieDetails(id) {
    const response = await fetch('http://react-cdp-api.herokuapp.com/movies/' + id)
    return await response.json();
  }
}