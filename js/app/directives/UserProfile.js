function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: function(scope,els,attrs,ctrl,transclude){
			els.find('span').after(transclude());
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
