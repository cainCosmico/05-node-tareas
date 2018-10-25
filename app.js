//Comandos
const argv = require('./config/yargs').argv;

//Filesystem
const porHacer = require('./por-hacer/por-hacer');

//Colores
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
		break;
	case 'listar':
		let listado = porHacer.getListado();
		console.log('=============Tareas============'.green);
		for (let i of listado) {
			console.log(`== Tarea:  ${i.descripcion} == estado ${i.completado}`);
		}
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		break;
	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
		break;
	default:
		console.log('Comando no reconocido');
		break;
}
