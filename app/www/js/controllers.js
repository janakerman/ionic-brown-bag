angular.module('starter.controllers', [])

  .controller('ContactListCtrl', function(contactService, $scope) {

    $scope.data = {
      showDelete: false,
      contacts: contactService.getContacts()
    };

    // Delete

    $scope.deleteClicked = function() {
      $scope.data.showDelete = !$scope.data.showDelete;
    };

    $scope.onContactDelete = function(contact) {
      // Remove the deleted item from our model.
      $scope.data.contacts.splice($scope.data.contacts.indexOf(contact), 1);
    };

    // Reorder

    $scope.reorderClicked = function() {
      $scope.data.showReorder = !$scope.data.showReorder;
    };

    $scope.onContactReorder = function(contact, fromIndex, toIndex) {
      // Reorder the deleted item in our model
      $scope.data.contacts.splice(fromIndex, 1);
      $scope.data.contacts.splice(toIndex, 0, contact);
    }
});
