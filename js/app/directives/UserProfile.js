function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div style="border: 1px solid black;"">',
				'<h3>User Profile</h3>',
				'This is part of the template',
				'This is from the directive in the index page:<span></span>',
				"notice we didn't overwrite it",
			'</div>'
		].join(''),
		link: function(scope, element, attrs, ctrl, transclude) {
			element.find('span').after(transclude());
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
