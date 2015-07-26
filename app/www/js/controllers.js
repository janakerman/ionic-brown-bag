angular.module('starter.controllers', [])

  .controller('ContactListCtrl', function(contactService, $scope) {

    $scope.data = {
      contacts: contactService.getContacts()
    };

  });

