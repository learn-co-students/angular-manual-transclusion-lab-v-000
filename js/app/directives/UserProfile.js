function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: function(a,b,c,d,e) {
			b.find('span').after(e());
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
