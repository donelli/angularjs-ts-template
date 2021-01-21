
export class MyRouteCtrl implements angular.IController {
  
  str: string = 'Hello word!';
  
  showAlert(msg: string) {
    alert(msg);
  }
  
}
