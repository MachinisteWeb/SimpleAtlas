var website = website || {};

(function (publics) {
	var privates = {};

	publics.components = publics.components || {};

	privates.autoLoad = function () {
		for (var currentComponent in publics.components) {
			publics.components[currentComponent]();
		}
	};

	publics.asyncDemo = function () {
		$(".async-demo").click(function () {
			// Simulation asynchrone.
			$(this).after('<section class="beta-component"><h2>Beta Component</h2>Ceci est un « Beta Component » asynchrone de la page.<div>In progress...</div></section>');
			
			publics.components.betaComponent();
		});
	};

	publics.init = function () {
		privates.autoLoad();
		publics.asyncDemo();
	};
}(website));

website.init();