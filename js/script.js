	var nombre = null;
	var año = null;
	var genero = null;
    var act1 = null;
    var act2 = null;
    var act3 = null;
    var sinopsis = null;
	var arreglo = new Array();
	var j = 0;
	
	function agregarNombre(parametro){
		nombre = parametro.value;
		var mostrarNombre = document.getElementById("resultado1");
		mostrarNombre.innerHTML = "Nombre: " +nombre;
	}
	
	function agregarAño(parametro){
		año = parametro.value;
		var mostrarAnio = document.getElementById("resultado2");
		mostrarAnio.innerHTML = "Año: " +año;
	}
	
	function agregarGenero(parametro){
		genero = parametro.value;
		var mostrarGenero = document.getElementById("resultado3");
		mostrarGenero.innerHTML = "Genero: " +genero;
	}
	function agregarAct1(parametro){
		act1 = parametro.value;
		var mostrarAct1 = document.getElementById("resultado4");
		mostrarAct1.innerHTML = "Actor1: " +act1;
	}
	function agregarAct2(parametro){
		act2 = parametro.value;
		var mostrarAct2 = document.getElementById("resultado5");
		mostrarAct2.innerHTML = "Actor2: " +act2;
	}
	function agregarAct3(parametro){
		act3 = parametro.value;
		var mostrarAct3 = document.getElementById("resultado6");
		mostrarAct3.innerHTML = "Actor3: " +act3;
	}
    function agregarSinopsis(parametro){
      sinopsis = parametro.value;
      var mostrarSinopsis = document.getElementById("resultado7");
      mostrarSinopsis.innerHTML = "Sinopsis: " +sinopsis;
	}
	function agregar(){
		var objeto = {
			"nombre": nombre,
			"año": año,
			"genero": genero,
            "act1": act1,
            "act2": act2,
            "act3": act3,
            "sinopsis": sinopsis,
		};
		arreglo[arreglo.length] = objeto;
		limpiar();
		alert("Registro guardado");
        mostrar();
	}
    function eliminar(){
        let pos = document.getElementById("actualizarEliminar").value;
        numeroElementos = 1
        let elementosEliminados = arreglo.splice(pos, numeroElementos)
        mostrar();
        document.getElementById("nombre").value = "";
		alert("El registro se ha eliminado exitosamente");
    }
	function actu(){
		
		let pos = document.getElementById("actualizarEliminar").value;
		
		var objetos = {
			"nombre": nombre,
			"año": año,
			"genero": genero,
            "act1": act1,
            "act2": act2,
            "act3": act3,
            "sinopsis": sinopsis,
		};
		
		let elementosActualizados = arreglo.splice(pos, 1, objetos );
        mostrar();
		alert("Lo datos se actualizaron correctamente");
	}	
	
	
	 
	function mostrar(){
		var msj = "";
		for(var i = 0; i < arreglo.length; i++){
			msj += "<tr>"+
				"<td>" +arreglo[i].nombre +"</td>" +
				"<td>" +arreglo[i].año +"</td>" +
				"<td>" +arreglo[i].genero +"</td>"+
                "<td>" +arreglo[i].act1 + "<br/>"
                       +arreglo[i].act2 + "<br/>"
                       +arreglo[i].act3 +
                "</td>"+
				"<td>" +arreglo[i].sinopsis +"</td>"+
					"</tr>";
		}
		document.getElementById("resultado8").innerHTML = msj;
	}
	
	function limpiar(){
		document.getElementById("resultado1").innerHTML = "Nombre: ";
		document.getElementById("resultado2").innerHTML = "Año: ";
		document.getElementById("resultado3").innerHTML = "Genero: ";
        document.getElementById("resultado4").innerHTML = "Actor 1: ";
        document.getElementById("resultado5").innerHTML = "Actor 2: ";
        document.getElementById("resultado6").innerHTML = "Actor 3: ";
        document.getElementById("resultado7").innerHTML = "Sinopsis: ";
	}

	function buscar(){
		alert("existe")
	}