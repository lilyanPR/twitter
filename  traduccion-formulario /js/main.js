function traduccion (){

	var titulo = document.getElementById('form-signin-heading');
	var nuevoTitulo='Por Favor Inicia Sesión';
	titulo.innerHTML=nuevoTitulo;

	var email = document.getElementById('inputEmail');
	email.placeholder='Correo Electronico';

	var password = document.getElementById('inputPassword');
	password.placeholder='Contraseña';

	var remember = document.getElementsByTagName('span')[0];
	var newremember = 'Recordar Datos';
	remember.innerHTML=newremember;

	var sesion = document.getElementsByClassName('btn')[0];
	var newsesion = 'Iniciar Sesión';
	sesion.innerHTML = newsesion;

}
