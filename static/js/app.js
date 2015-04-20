(function() {
	var app = angular.module('bikesStore', []);

	app.controller('BikesController', function() {
		this.products = parts;
	});

	var parts = [{
		name: 'Luz Numen Mini Azul, Morada/Luz Blanca y Roja',
		code: 'B2017',
		marca: 'Giant',
		modelo: 'Numen MINI W',
		categoria: 'Accesorios',
		subcategoria: 'Luces',
		precio: 7000,
		titleEspec: 'Especificaciones Técnicas',
		especificaciones: [
			"2 Bright LED blancos",
			"2 modos: constante / Flash",
			"Fácil montaje correasuave",
			"Funda de goma resistente al agua"
		]
		}, {
			name: 'Candado AirLock Double Loop',
			code: 'B4183',
			marca: 'Giant',
			modelo: 'AirLock Double Loop',
			categoria: 'Accesorios',
			subcategoria: 'Seguridad',
			precio: 30.000,
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"200cm de largo",
				"4.8mm de grueso",
				"Cierre de seguridad mediante contraseña",
				"Ligero"
			]
		}, {
			name: 'PortaCaramañola Race Azul',
			code: 'B5257',
			marca: 'Giant',
			modelo: 'Water Bottle Cage Race',
			categoria: 'Accesorios',
			subcategoria: 'Bottle Cages',
			precio: 8.000,
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Light Weight",
				"Fits Most Bottles",
				"Durable"
			]
		}, {
			name: 'Manillar Bartape Giant',
			code: 'B3468',
			marca: 'Giant',
			modelo: 'Bartape',
			categoria: 'Accesorios',
			subcategoria: 'Grips',
			precio: 24.000,
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Embossed with GIANT logo",
				"Non-slip suede effect surface",
				"Has a lock-on screw",
				"Provides the feel of cushioned wrap tape found on road bikes.",
				"Durable all-conditions perforated surface for ventilation"
			]
		}, {
			name: 'PortaCaramañola Metalica Plateada',
			code: 'B6843',
			marca: 'Giant',
			modelo: 'GateWay 4MM Silver',
			categoria: 'Accesorios',
			subcategoria: 'Bottle Cages',
			precio: 10.000,
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Alloy bottle cage",
				"4mm alloy rod",
				"Tough still flexible",
				"Compatible con varias botellas de agua"
			]
		}, {
			name: 'PortaCaramañola Lateral Pasta Dura Gris',
			code: 'B1432',
			marca: 'Giant',
			modelo: 'Sidecar BLACK',
			categoria: 'Accesorios',
			subcategoria: 'Bottle Cages',
			precio: 8.000,
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Colocación lateral de la botella de agua",
				"Ideal para cuadros pequeños y espacios estrechos",
				"Puntos de contacto co-moldeados.",
				"Fabricación de policarbonato, ligero (38g)"
			]
		}];
})();