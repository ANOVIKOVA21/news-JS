import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '96de0d62813b4717acaafe5b93d1cb08',
    });
  }
}
//'https://newsapi.org/v2/'
export default AppLoader;
