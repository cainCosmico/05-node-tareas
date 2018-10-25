const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json', data, function(err) {})
}

const cargarDB = () => {
	try {
		listadoPorHacer = require('../db/data.json');
	} catch (e) {
		listadoPorHacer = [];
	}
}

const crear = (descrripcion) => {
	cargarDB();

	let porHacer = {
		descripcion: descrripcion,
		completado: false,
	};

	listadoPorHacer.push(porHacer);
	guardarDB();
	return porHacer;
}

const actualizar = (descripcion, completado = true) => {
	cargarDB();
	index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
	if(index >= 0) {
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}
}

const borrar = (descripcion) => {
	cargarDB();
	let nuevoListado = listadoPorHacer.filter( i => i.descripcion !== descripcion);

	if ( listadoPorHacer.length === nuevoListado.length) return false
	else {
		listadoPorHacer = nuevoListado;
		guardarDB();
		return true;
	}
}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}
