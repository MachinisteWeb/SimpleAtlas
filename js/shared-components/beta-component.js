var website = website || {};

(function (publics) {
	publics.components = publics.components || {};

	publics.components.betaComponent = function () {
		$(".beta-component").each(function (i) {
			$(this).find("div").text("Beta composant chargé " + parseInt(i + 1, 10) + " fois !");
		})
	};
}(website));