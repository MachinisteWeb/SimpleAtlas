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
			var $this = $(this);
			// Simulation asynchrone.
			$.get( "asynchrones/component-b.html", function(data) {
		  		$this.after(data);
			}).fail(function() {
		    	alert("Aucun serveur web ne tourne, une requête AJAX est donc impossible. Un bout de faux code va être injecté pour simuler l'effet attendu. Vous pouvez faire tourner facilement un serveur web avec NodeAtlas : http://www.lesieur.name/node-atlas/.");
		    	$this.after('<section class="beta-component"><h2>Beta Component</h2>Ceci est un « Beta Component » asynchrone de la page.<div>In progress...</div></section>');
		  	}).complete(function () {
				publics.components.betaComponent();
		  	});
		});
	};

	publics.init = function () {
		privates.autoLoad();
		publics.asyncDemo();
	};
}(website));

website.init();