function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: function(scope, element, attr, ctl, transclude ) {
			element.find('span').append(transclude())
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
