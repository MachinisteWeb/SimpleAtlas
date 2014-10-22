var website = website || {};

(function (publics) {
	var privates = {};

	publics.components = publics.components || {};

	privates.autoLoad = function () {
		for (var currentComponent in publics.components) {
			publics.components[currentComponent]();
		}
	};
	
	publics.init = function () {
		privates.autoLoad();
	};
}(website));

website.init();