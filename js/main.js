$('body').off('.data-api');

function conMayusculas(field) 
{
    field.value = field.value.toUpperCase()
}

function permite(elEvento, permitidos)
{
	// Variables que definen los caracteres permitidos
	var numeros = "0123456789";
	var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	var numeros_caracteres = numeros + caracteres;
	var teclas_especiales = [8, 37, 39, 46];
	// 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
	
	// Seleccionar los caracteres a partir del parámetro de la función
	switch(permitidos) 
	{
		case 'num':
			permitidos = numeros;
		break;
		case 'car':
			permitidos = caracteres;
		break;
		case 'num_car':
			permitidos = numeros_caracteres;
		break;				
	}

	// Obtener la tecla pulsada
	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	var caracter = String.fromCharCode(codigoCaracter);
	
	// Comprobar si la tecla pulsada es alguna de las teclas especiales
	// (teclas de borrado y flechas horizontales)
	var tecla_especial = false;
	for(var i in teclas_especiales) 
	{
		if(codigoCaracter == teclas_especiales[i]) 
		{
			tecla_especial = true;
			break;
		}
	}

	// Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
	// o si es una tecla especial

	if(! (permitidos.indexOf(caracter) != -1 || tecla_especial))
	{
		alert('Caracter no permitido');
		return permitidos.indexOf(caracter) != -1 || tecla_especial;
	}
	else
		return permitidos.indexOf(caracter) != -1 || tecla_especial;
}


function validaEmail(direccion)
{
	valor = document.getElementById("campo").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) 
	{
		alert('El formato no es valido');
		return false;
	}
}

function validateEnter(e) 
{
	var key=e.keyCode || e.which;
	if(key==13)
	{ 
		return true; 
	} 
	else 
	{ 
		return false; 
	}
}

function validaCarreraAlumnos()
{
	indice = document.getElementById("carrera").selectedIndex;
	if( indice == null || indice == 0 ) 
	{
		alert('Debes Elegir Una Opción')
		return false;
	}
}

function validaEnviarFormularioAlumno()
{
	
	var cod = document.formAlumno.codigo.value;
	var nom = document.formAlumno.nombre.value;
	var ap = document.formAlumno.apPaterno.value;
	var am = document.formAlumno.apMaterno.value;
	var cel = document.formAlumno.celular.value;
	var correo = document.formAlumno.email.value;


	if((cod == "") || (nom == "") || (ap == "") || (am == "") || (validaCarreraAlumnos() == true) || (cel == "") || (correo == ""))
	{		
		alert('No se permiten campos vacios')
		return false;
	}	

	alert('Cambios Guardados Exitosamente')
	return true;
}

function validaAcademia()
{
	indice = document.getElementById("Academia").selectedIndex;
	if( indice == null || indice == 0 ) 
	{
		alert('Debes Elegir Una Opción')
		return false;
	}
}

function validaEnviarFormularioCurso()
{
	var nrc = document.formCurso.NRC.value;
	var curso = document.formCurso.nomCurso.value;
	var sec = document.formCurso.Seccion.value;
	var hr = document.formCurso.cantHoras.value;
	var horario = document.formCurso.Horario.value;		


	if((nrc == "") || (curso == "") || (sec == "") || (hr == "") || (validaAcademia() == false) || (horario == ""))
	{		
		alert('No se permiten campos vacios')
		return false;
	}	

	alert('Cambios Guardados Exitosamente')
	return true;
}

function limpiaFormularioAlumno()
{
	
	document.formAlumno.codigo = "";
	var nom = document.formAlumno.nombre.value;
	var ap = document.formAlumno.apPaterno.value;
	var am = document.formAlumno.apMaterno.value;
	var cel = document.formAlumno.celular.value;
	var correo = document.formAlumno.email.value;	
	return true;
}

function validaAsistenciaBuscar()
{
	var dia = document.formAsistencia.dia.value;

	if(dia == "")
	{		
		alert('Agrega el dia')
		return false;
	}	

	alert('Cambios Guardados Exitosamente')
	return true;
}

function validaCalificacionBuscar()
{
	var dia = document.formCalificacion.dia.value;

	if(dia == "")
	{		
		alert('Agrega el dia')
		return false;
	}	

	alert('Cambios Guardados Exitosamente')
	return true;
}

function validaEvaluacionBuscar()
{
	var nrc = document.formEvaluacion.NRC.value;

	if(nrc == "")
	{		
		alert('Agrega el dia')
		return false;
	}	

	alert('Cambios Guardados Exitosamente')
	return true;
}

