

function validateForm(){
	
//ingresar input 

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var email = document.getElementById('input-email').value;
	var contraseña = document.getElementById('input-contraseña').value;

//validacion
	if (nombre.length == 0) {
		alert("ERROR: NOMBRE es obligatorio.");
		return false;
	} 
	
	else if ( apellido.length == 0) {
		alert("ERROR: APELLIDO es obligatorio.");
		return false;
	} 

	else if ( email.length == 0) {
		alert("CORREO ELECTRÓNICO es obligatorio.");
		return false;
	} 

	else if ( contraseña.length == 0) {
		alert("CONTRASEÑA es obligatorio.");
		return false;
	} 

	if (!/^[a-zA-Z]+$/i.test(nombre.value)){
		alert("Debe contener solo letras");
		return false;
	} 

	else if (!/^[a-z]/.test(nombre.value)) {
		alert("La primera letra debe ser mayuscula");
		return false;
	}

	else if (!/^[a-zA-Z]+$/i.test(apellido.value)){
		alert(" Debe contener solo letras");
		return false;
	}  

	else if (!/^[a-z]/.test(apellido.value)) {
		alert("La primera letra debe ser mayuscula");
		return false;	
	}
}
