let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let matricula = document.getElementById('matricula')
let nota = document.getElementById('nota')
let btnGuardar = document.getElementById('guardar')
let actualizar = document.getElementById('Actualizar')
let actual = document.getElementById('actual')

let inputActualizar = document.createElement('input')
inputActualizar.type = 'button'
inputActualizar.value = 'Actualizar'
inputActualizar.classList.add('btn', 'btn-success', 'bg-success')

let h1 = document.getElementById('h1')

class Estudiante {
  constructor(nombre, apellido, matricula, nota) {
    this.nombre = nombre
    this.apellido = apellido
    this.matricula = matricula
    this.nota = nota
  }
}

datosEstudiantes = [
  /*  {
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

const promedio = (datosEstudiantes) => {
  let tot = 0
  for (x of datosEstudiantes) {
    tot = tot + parseFloat(x.nota)
  }
  let resultado = tot / datosEstudiantes.length
  resultado = resultado.toFixed(2)

 let resultadoN = isNaN(resultado) ? "00.00" : resultado
  console.log(resultadoN)
  //console.log(resultado) ' Promedio ' + resultado
  return (h1.textContent = ' Promedio ' + resultadoN)
}

const imprimirTabla = (a) => {
  a.forEach((p) => {
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

    let inputEditar = document.createElement('input')
    inputEditar.type = 'button'
    inputEditar.value = 'Editar'
    inputEditar.classList.add('btn', 'btn-success', 'bg-success')

    inputEditar.addEventListener('click', function () {
      actual.append(inputActualizar)
      inputActualizar.addEventListener('click', () => {
        console.log('Actualizacion enviada')
        cuerpoTabla.innerText = ''

        indice = datosEstudiantes.indexOf(p)
        datosEstudiantes.splice(indice, 1, {
          nombre: nombre.value,
          apellido: apellido.value,
          matricula: matricula.value,
          nota: nota.value,
        })

        promedio(datosEstudiantes)
        imprimirTabla(datosEstudiantes)
        inputActualizar.remove()

        borrarCampos()
      })

      nombre.value = p.nombre
      apellido.value = p.apellido
      matricula.value = p.matricula
      nota.value = p.nota
      nombre.focus()

      console.log(this.parentElement.firstElementChild)
    })

    fila.appendChild(inputEditar)

    let inputEliminar = document.createElement('input')
    inputEliminar.type = 'button'
    inputEliminar.value = 'Eliminar'
    inputEliminar.classList.add('btn', 'btn-danger', 'bg-danger')

    inputEliminar.addEventListener('click', function () {
      cuerpoTabla.innerText = ''
      console.log('eliminando')
  
      let indice = datosEstudiantes.indexOf(p)
      datosEstudiantes.splice(indice, 1)
      console.log(datosEstudiantes)
      promedio(datosEstudiantes)
      imprimirTabla(datosEstudiantes)
    })

    fila.appendChild(inputEliminar)

    cuerpoTabla.appendChild(fila)
    cuerpoTabla.appendChild(fila)
  })

  tablaEstudiantes.appendChild(cuerpoTabla)
}

//console.log(datosEstudiantes)

const addEstudiante = (nombre, apellido, matricula, nota) => {
  const estudiante1 = new Estudiante(nombre, apellido, matricula, nota)
  datosEstudiantes.push(estudiante1)
}

let tablaEstudiantes = document.getElementById('tablaEstudiantes')
let cuerpoTabla = document.getElementById('tbody')

tablaEstudiantes.appendChild(cuerpoTabla)
btnGuardar.addEventListener('click', (e) => {
  //e.preventDefault()
  console.log('guardando')

  cuerpoTabla.innerText = ''

  if (
    nombre.value == '' ||
    apellido.value == '' ||
    matricula.value == '' ||
    nota.value == ''
  ) {
    alert('Campos vacios')
  } else if (nota.value > 100 || nota.value < 0) {
    alert('Introduzca un valor entre 0 y 100')
  } else {
    addEstudiante(nombre.value, apellido.value, matricula.value, nota.value)

    borrarCampos()

    promedio(datosEstudiantes)
    localStorage.setItem('datos', JSON.stringify(datosEstudiantes))

    //location.reload()
    //imprimirTabla(local);
    console.log(datosEstudiantes)
    // console.log(JSON.parse(guardado))

    imprimirTabla(datosEstudiantes)
  }
})
//imprimirTabla(local)
let guardado = localStorage.getItem('datos')
let local = JSON.parse(guardado)

/* document.addEventListener("DOMContentLoaded",(event)=>{
  
let guardado = localStorage.getItem('datos')
let local = JSON.parse(guardado)
imprimirTabla(JSON.parse(guardado))
})
 */
//console.log('objetoLocal: ',local)
//datosEstudiantes.push(local)
// console.log('objetoObtenido: ', JSON.parse(guardado))

const borrarCampos = () => {
  nombre.value = ' '
  apellido.value = ' '
  matricula.value = ' '
  nota.value = ''
  nombre.focus()
}
