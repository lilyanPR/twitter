

function modificacion() {
	
	//texto
	var tarea = document.getElementById('tarea').value;

	//campo obligatorio
	if (tarea.length == 0 || tarea == null) {
		alert("Campo obligatorio");
		return false;
	} 

	//contenedor de tareas
	var containerTareas= document.getElementById('lista');
	//nueva tarea
	var nuevaTarea = document.createElement('div');
	//atributos de nueva tarea
	nuevaTarea.setAttribute('class', 'agregar');
	//transformamos el texto de la tarea en nodo
	var newText = document.createTextNode(tarea);
	//nodo que contendra el nodo de texto
	var contieneNodo = document.createElement('span');
	//atributos span contenedor de texto
	contieneNodo.setAttribute('class','contieneTexto');
	//input para checkbox
	var checkbox = document.createElement('input');
	//atributos de checkbox
	checkbox.setAttribute('type','checkbox');
	

	//boton me gusta 
	var corazon = document.createElement('span'); 
	//atributos a botnes me gusta
	corazon.setAttribute('type','button');
	corazon.setAttribute('class','iconos');
	corazon.setAttribute('class', 'corazon');
	//icono corazon
	var iconoCorazon= document.createElement('i');
	iconoCorazon.setAttribute('class','glyphicon glyphicon-heart');
	
	
	//atributos a botnes eliminar
	var basurero= document.createElement('span');
	basurero.setAttribute('type', 'button');
	basurero.setAttribute('id', 'eliminar');
	basurero.setAttribute('onclick','eliminarTarea()');
	basurero.setAttribute('class','iconos');
	basurero.setAttribute('class','trash');
	//crear icono
	var iconoBasurero = document.createElement('i');
	iconoBasurero.setAttribute('class', 'glyphicon glyphicon-trash');
	//nodos de iconos
	corazon.appendChild(iconoCorazon);
	basurero.appendChild(iconoBasurero);



	//nodos
	var text=document.createElement('span');
	text.appendChild(newText);
	nuevaTarea.appendChild(checkbox);
	nuevaTarea.appendChild(text);
	nuevaTarea.appendChild(corazon);
	nuevaTarea.appendChild(basurero);
	lista.appendChild(nuevaTarea);
	

	}
	
	function eliminarTarea(){
	var borrar=document.getElementById("eliminar");
	var suprimir=borrar.parentNode;
	
	suprimir.parentNode.removeChild(suprimir);

}




	
/*

	// boton me gusta color
	corazon.addEventListener('click', function(){
	corazon.classList.toggle('like');
	});

	//tachar tarea
	chbox.addEventListener('click', function(){
	nuevaTarea.classList.toggle('tachar');
	});


*/
