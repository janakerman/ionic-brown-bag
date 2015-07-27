angular.module('starter.controllers', [])

  .controller('ContactListCtrl', function(contactService, $scope) {

    $scope.data = {
      showDelete: false,
    };

    function updateContacts() {
      contactService.getContacts().then(function (contacts) {
        $scope.data.contacts = contacts;
      });
    }

    $scope.$on('$ionicView.enter', function(){
      updateContacts();
    });

    // Delete

    $scope.deleteClicked = function() {
      $scope.data.showDelete = !$scope.data.showDelete;
    };

    $scope.onContactDelete = function(contact) {
      // Remove the deleted item from our model.
      $scope.data.contacts.splice($scope.data.contacts.indexOf(contact), 1);

      contactService.saveContacts($scope.data.contacts);
    };

    // Reorder

    $scope.reorderClicked = function() {
      $scope.data.showReorder = !$scope.data.showReorder;
    };

    $scope.onContactReorder = function(contact, fromIndex, toIndex) {
      // Reorder the deleted item in our model
      $scope.data.contacts.splice(fromIndex, 1);
      $scope.data.contacts.splice(toIndex, 0, contact);

      contactService.saveContacts($scope.data.contacts);
    }

  })

  .controller('ContactDetailCtrl', function($stateParams, $scope, contactService) {
    contactService.getContact($stateParams.id).then(function(contact) {
      $scope.contact = contact;
    });
  })

  .controller('AddContactCtrl', function($scope, contactService, $state, $ionicViewService) {

    $scope.data = {
      name: null,
      age: null,
      position: null
    };

    $scope.addContact = function() {
      contactService.getContacts().then(function(contacts) {
        contacts.push({
          name: $scope.data.name,
          age: $scope.data.age,
          position: $scope.data.position
        });
        contactService.saveContacts(contacts);

        $ionicViewService.nextViewOptions({
          disableBack: true
        });

        $state.go('contacts', null, { reload: true });
      });
    };

    $scope.cancel = function() {
      $state.go('contacts', null, { reload: true });
    };
  });

