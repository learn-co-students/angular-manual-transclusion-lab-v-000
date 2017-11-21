function UserProfile() {
	return {
		transclude: true,
		link: function(scope, elem, attr, ctrl, transclude){
			elem.find('span').after(transclude());
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
