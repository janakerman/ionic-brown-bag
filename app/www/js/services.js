angular.module('starter.services', [])

	.factory('contactService', function() {
		function getContacts() {
			return [
				{ name: 'Contact 1', age: 18, position: 'Intern' },
				{ name: 'Contact 2', age: 35, position: 'Developer' },
				{ name: 'Contact 3', age: 65, position: 'Project Manager' },
				{ name: 'Contact 4', age: 34, position: 'Senior Developer' },
				{ name: 'Contact 5', age: 56, position: 'Senior Developer' },
				{ name: 'Contact 7', age: 24, position: 'Developer' }
			];
		}

		return {
			getContacts: getContacts
		}
	})