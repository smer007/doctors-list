'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('doctorsListApp'));

  var MainCtrl;
    var scope;
debugger;
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    scope = $rootScope.$new();
    MainCtrl = _$controller_('MainCtrl', {
      $scope: scope
      
    });
  }));

  

  it('should have doctor list defined', function () {
    expect(scope.doctorData).toBeDefined();
  });


});
