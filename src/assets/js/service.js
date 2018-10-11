app.service('mainSvc', function () {

  var functionRut = function (rut) {
    var regex = /^[1-9][0-9]?([.]?[0-9]{3}){2}[-][0-9kK]$/g;
    return regex.test(rut);
  }
  this.isRut = (rut) = functionRut;
});
