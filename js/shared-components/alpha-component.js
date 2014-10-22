var website = website || {};

(function (publics) {
	publics.components = publics.components || {};

	publics.components.alphaComponent = function () {
		$(".alpha-component").each(function (i) {
			$(this).find("div").text("Alpha composant chargé " + parseInt(i + 1, 10) + " fois !");
		})
	};
}(website));