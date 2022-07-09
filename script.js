let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let matricula = document.getElementById('matricula')
let nota = document.getElementById('nota')
let btnGuardar = document.getElementById('guardar')
let hh = document.getElementById('hh')

class Estudiante {
  constructor(nombre, apellido, matricula, nota) {
    this.nombre = nombre
    this.apellido = apellido
    this.matricula = matricula
    this.nota = nota
  }
}

datosEstudiantes = [
  /*   {
    nombre: 'juan',
    apellido: 'perez',
    matricula: 2022,
    nota: 90,
  },
  {
    nombre: 'pedro',
    apellido: 'sosa',
    matricula: 2023,
    nota: 92,
  }, */
]

//console.log(datosEstudiantes)

const addEstudiante = (nombre, apellido, matricula, nota) => {
  const estudiante1 = new Estudiante(nombre, apellido, matricula, nota)
  datosEstudiantes.push(estudiante1)
}


let tablaEstudiantes = document.getElementById('tablaEstudiantes')
let cuerpoTabla = document.getElementById('tbody')


tablaEstudiantes.appendChild(cuerpoTabla)
btnGuardar.addEventListener('click', () => {
  if(nombre.value == "" || apellido.value == "" || matricula.value == "" || nombre.value == ""){
    alert("Campos vacios")
  }else{
    
    addEstudiante(nombre.value, apellido.value, matricula.value, nota.value)
    let ultimoEstudiante = []
    ultimoEstudiante.push(datosEstudiantes[datosEstudiantes.length - 1])
    console.log(datosEstudiantes[datosEstudiantes.length - 1])
    nombre.value = " ";
    apellido.value = " ";
    matricula.value = " ";
    nota.value = " ";
    
    
    imprimirTabla(ultimoEstudiante)
    let prome = promedio()
    
    hh.textContent = ' Promedio ' + prome.toFixed(2)
   
  
    localStorage.setItem('datos', JSON.stringify(datosEstudiantes))
    var guardado = localStorage.getItem('datos')
  
    console.log('objetoObtenido: ', JSON.parse(guardado))
  }
})

const imprimirTabla = (datosEstudiantes) => {
  datosEstudiantes.forEach((p) => {
    let fila = document.createElement('tr')

    let td = document.createElement('td')
    td.innerText = p.nombre
    fila.appendChild(td)

    td = document.createElement('td')
    td.innerText = p.apellido
    fila.appendChild(td)

    td = document.createElement('td')
    td.innerText = p.matricula
    fila.appendChild(td)

    td = document.createElement('td')
    td.innerText = p.nota
    fila.appendChild(td)

    cuerpoTabla.appendChild(fila)

    cuerpoTabla.appendChild(fila)
  })

  tablaEstudiantes.appendChild(cuerpoTabla)
}

function promedio() {
  let tot = 0
  for (x of datosEstudiantes) {
    // console.log(tot)
    tot = tot + parseFloat(x.nota)
    // console.log(tot)
  }
  let resultado = tot / datosEstudiantes.length
  console.log(resultado)
  return resultado
}

//console.log(promedio())
