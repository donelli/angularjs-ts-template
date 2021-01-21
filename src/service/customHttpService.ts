
export class CustomHttpService {
  
  static $inject = [ '$http' ];
  
  constructor(
    private $http: angular.IHttpService
  ) {}
  
  getFromUrl(url: string) {
    return this.$http.get(url);
  }
  
}
