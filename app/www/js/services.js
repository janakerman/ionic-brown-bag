angular.module('starter.services', [])

	.factory('contactService', function($q, $ionicPlatform) {

		var CONTACT_FILENAME = "contacts.json";

		function getContacts() {

			var defer = $q.defer();

			// Wait cordova platform is ready.
			$ionicPlatform.ready(function() {
				window.slfile.loadString(CONTACT_FILENAME, function (string) {

					var contacts = JSON.parse(string);
					defer.resolve(contacts);

				}, function () {
					defer.resolve([]);
				});
			});

			return defer.promise;
		}

		function getContact(id) {
			return getContacts().then(function(contacts) {
				return contacts[id];
			});
		}

		function saveContacts(contacts) {
			var string = JSON.stringify(contacts);

			// Wait cordova platform is ready.
			$ionicPlatform.ready(function() {

				window.slfile.saveString(string, CONTACT_FILENAME);
			});
		}

		return {
			getContacts: getContacts,
			getContact: getContact,
			saveContacts: saveContacts
		}
	});
