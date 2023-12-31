



// Crear tabla y agregar encabezados
const tabla = document.createElement("table");
const encabezados = ["Nombre", "Apellido", "Edad","Etario", "Clan"];
const encabezadoRow = document.createElement("tr");

encabezados.forEach(encabezado => {
    const th = document.createElement("th");
    th.textContent = encabezado;
    encabezadoRow.appendChild(th);
});
tabla.appendChild(encabezadoRow);



// Agregar filas con datos de estudiantes

function save() {
    const color = document.getElementById('color');
    // Datos de estudiantes
    const estudiante = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        etario: '',
        grupo: document.getElementById('grupos').value
        };
    
    // Grupo Etario
    if (parseInt(estudiante.edad) >= 0 && parseInt(estudiante.edad) <= 5){
        estudiante.etario = "Primera Infancia";
    }else if (parseInt(estudiante.edad) >= 6 && parseInt(estudiante.edad) <= 11){
        estudiante.etario = "Infancia";
    }else if (parseInt(estudiante.edad) >= 12 && parseInt(estudiante.edad) <= 18){
        estudiante.etario = "Adolescencia";
    }else if (parseInt(estudiante.edad) >= 14 && parseInt(estudiante.edad) <= 26){
        estudiante.etario = "Juventud";
    }else if (parseInt(estudiante.edad) >= 27 && parseInt(estudiante.edad) <= 59){
        estudiante.etario = "Adultez";
    }else{
        estudiante.etario = "Vejez";
    }

    const fila = document.createElement("tr");

    for (const key in estudiante) {
        const Cell = document.createElement("td");
        Cell.textContent = estudiante[key];
        fila.appendChild(Cell);
        tabla.appendChild(fila);
        }
    // Agregar la tabla al cuerpo del documento
    document.body.appendChild(tabla);
    color.addEventListener('click', function(){
        if (estudiante.grupo == "JOBS") {
            fila.style.backgroundColor = "yellow";
        } else if (estudiante.grupo == "RICHIE") {
            fila.style.backgroundColor = "#9be686";
        } else if (estudiante.grupo == "LOVELACE") {
            fila.style.backgroundColor = "orange";
        } else {
            fila.style.backgroundColor = "#c474c4";
        }
    })
}


