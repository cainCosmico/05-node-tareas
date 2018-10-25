const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripcion de la tarea'
};

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marcar como completado o pendiente la tarea'
};

const argv = require('yargs')
					.command('crear', 'Crear un elemento por hacer', {
						descripcion
					})
					.help()
					.command('actualizar', 'Actualizar el estado completado de una tarea', {
						descripcion,
						completado
					})
					.help()
					.command('borrar', 'Borra el elemento tarea por hacer', {
						descripcion
					})
					.help()
  					.argv;

module.exports = {
	argv
}
