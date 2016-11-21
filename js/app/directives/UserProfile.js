function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: function(scope, ele, attrs, ctrl, transclude){
			ele.find('h3').after(transclude());
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
