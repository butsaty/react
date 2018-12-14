export default class ImdbService {
  static async getMovieList(searchBy, value) {
    const response = await fetch(`http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${searchBy}`);
    return await response.json();
  }

  static async getMovieDetails(id) {
    const response = await fetch('http://react-cdp-api.herokuapp.com/movies/' + id)
    return await response.json();
  }
}