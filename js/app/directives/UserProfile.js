function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: function(scope, elem, attrs, ctrl, transclude) {
			elem //grab the entire UserProfile directive element
			.find('span') //locate the <span> element
			.after(transclude()); //transclude after such element
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
