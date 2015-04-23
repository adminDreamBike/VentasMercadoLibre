(function() {
	var app = angular.module('bikesStore', []);

	app.controller('BikesController', function() {
		this.products = parts;
	});

	app.controller('FooterController', function() {
		this.footers = footerPage;
	});

	app.controller('NavController', function() {
		this.navs = nav;
	});

	var nav = [{
		logos: [{
			name: "Logo DumarBikesStore",
			urlLogo: "static/imagenes/logo.png"
		}],
		logins: [{
			nameIngresar: "Ingresar",
			urlPageIng: "",
			nameRegistro: "Registrame",
			urlPageReg: "template/registroUsuario.html"
		}],
		menus: [{
			titleSubMenu: "Luces",
			urlSubMenu: "template/LuzNumemGiant.html"
		}, {
			titleSubMenu: "PortaCaramañolas",
			urlSubMenu: "template/PortaCaramanolaRaceAzul.html"
		}, {
			titleSubMenu: "Guayas",
			urlSubMenu: "template/GuayaGiant.html"
		}, {
			titleSubMenu: "Manillares",
			urlSubMenu: "template/ManillarRojo.html"
		}]
	}];
	var parts = [{
		name: 'Luz Numen Mini Azul, Morada/Luz Blanca y Roja',
		code: 'B2017',
		marca: 'Giant',
		modelo: 'Numen MINI W',
		categoria: 'Accesorios',
		subcategoria: 'Luces',
		precio: 7000,
		url: 'template/LuzNumemGiant.html',
		titleEspec: 'Especificaciones Técnicas',
		especificaciones: [
			"2 Bright LED blancos",
			"2 modos: constante / Flash",
			"Fácil montaje correasuave",
			"Funda de goma resistente al agua"
		],
		image: "static/imagenes/luzGiantAzul.jpg"
		}, {
			name: 'Candado AirLock Double Loop',
			code: 'B4183',
			marca: 'Giant',
			modelo: 'AirLock Double Loop',
			categoria: 'Accesorios',
			subcategoria: 'Seguridad',
			precio: 30000,
			url: 'template/GuayaGiant.html',
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"200cm de largo",
				"4.8mm de grueso",
				"Cierre de seguridad mediante contraseña",
				"Ligero"
			],
			image: "static/imagenes/AIRLOCK DOUBLE LOOP -BLANC.jpg"
			}, {
			name: 'PortaCaramañola Race Azul',
			code: 'B5257',
			marca: 'Giant',
			modelo: 'Water Bottle Cage Race',
			categoria: 'Accesorios',
			subcategoria: 'Bottle Cages',
			precio: 8000,
			url: 'template/PortaCaramanolaRaceAzul.html',
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Light Weight",
				"Fits Most Bottles",
				"Durable"
			],
			image: "static/imagenes/portacaramañola.jpg"
			}, {
			name: 'Manillar Bartape Giant',
			code: 'B3468',
			marca: 'Giant',
			modelo: 'Bartape',
			categoria: 'Accesorios',
			subcategoria: 'Grips',
			precio: 24000,
			url: 'template/ManillarRojo.html',
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Embossed with GIANT logo",
				"Non-slip suede effect surface",
				"Has a lock-on screw",
				"Provides the feel of cushioned wrap tape found on road bikes.",
				"Durable all-conditions perforated surface for ventilation"
			],
			image: "static/imagenes/manillar-negro-giant.jpg"
			}, {
			name: 'PortaCaramañola Metalica Plateada',
			code: 'B6843',
			marca: 'Giant',
			modelo: 'GateWay 4MM Silver',
			categoria: 'Accesorios',
			subcategoria: 'Bottle Cages',
			precio: 10000,
			url: 'template/Portacaramanolametalica.html',
			titleEspec: 'Especificaciones Técnicas',
			especificaciones: [
				"Alloy bottle cage",
				"4mm alloy rod",
				"Tough still flexible",
				"Compatible con varias botellas de agua"
			],
			image: "static/imagenes/portacaramanola-metalica-gris2.jpg"
			}, {
				name: 'PortaCaramañola Lateral Pasta Dura Gris',
				code: 'B1432',
				marca: 'Giant',
				modelo: 'Sidecar BLACK',
				categoria: 'Accesorios',
				subcategoria: 'Bottle Cages',
				precio: 8000,
				url: 'template/PortaCaramanolaPastaLateralGris.html',
				titleEspec: 'Especificaciones Técnicas',
				especificaciones: [
					"Colocación lateral de la botella de agua",
					"Ideal para cuadros pequeños y espacios estrechos",
					"Puntos de contacto co-moldeados.",
					"Fabricación de policarbonato, ligero (38g)"
				],
				image: "static/imagenes/portacaramanola-gris-pasta.jpg"				
		}];
	var footerPage = [{
		description: 'Tienda Online de ventas de articulos electronicos y deportivos. Contamos con personal capacitado para atenderlo de la mejor manera.',
		urlLogo: 'static/imagenes/logo.png',
		contacts: [{
			name: "dumarbikesstore",
			image: "static/imagenes/Skype.png",
			url: "skype:dumarbikesstore?call"
		}, {
			name : "(4) 4234898",
			image: "static/imagenes/phone.png",
			url: "callto://+(4) 4234898"
		}, {
			name: "301-5363012",
			image: "static/imagenes/whatsapp.png",
			url: "callto://+3015363012"
		}, {
			name: "@dumarbikesstore",
			image: "static/imagenes/twitter.png",
			url: "http://twitter.com/dumarbikesstore"
		}, {
			name: "/dumarbikesstore",
			image: "static/imagenes/facebook.png",
			url: "//facebook.com/dumarbikesstore"
		}],		
		authors: [{
			name: "Powered by Carlos Andrés Rodriguez",
			email: "carlosdumar4@gmail.com"
		}]		
	}];

})();