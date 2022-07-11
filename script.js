let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let matricula = document.getElementById('matricula')
let nota = document.getElementById('nota')
let btnGuardar = document.getElementById('guardar')
let actualizar = document.getElementById('Actualizar')

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
  //console.log(resultado)
  return " Promedio " + resultado
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
    inputEditar.classList.add('btn', 'btn-success',"bg-success")

    inputEditar.addEventListener('click', function () {
      /* document.getElementById('nombre').value = p[0]
      document.getElementById('apellido').value = p[1]
      document.getElementById('matricula').value = p[2]
      document.getElementById('nota').value = p[3] */
      // document.getElementById('guardar').innerText = "Actualizar"
      btnGuardar.value = true ? 'Actualizar':'btnGuardar'
      btnGuardar.id = true  ? 'actualizar' : 'guardar'

     
        

      nombre.value = p.nombre
      apellido.value = p.apellido
      matricula.value = p.matricula
      nota.value = p.nota
      nombre.focus()
      

      console.log(this.parentElement.firstElementChild)
    })
    //input.setAttribute('class', 'btn-success')
    fila.appendChild(inputEditar)

    let inputEliminar = document.createElement('input')
    inputEliminar.type = 'button'
    inputEliminar.value = 'Eliminar'
    inputEliminar.classList.add("btn", "btn-danger", "bg-danger")

    inputEliminar.addEventListener('click', function () {
      h1.textContent = promedio(a)
      h1.textContent = promedio(datosEstudiantes)
      
      fila.remove()
    })
    //input.setAttribute('class', 'btn-success')
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
btnGuardar.addEventListener('click', () => {
  // datosEstudiantes.length = 0
  //cuerpoTabla.remove();

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

    h1.textContent = promedio(datosEstudiantes)

    localStorage.setItem('datos', JSON.stringify(datosEstudiantes))

    let guardado = localStorage.getItem('datos')
    let local = JSON.parse(guardado)
    imprimirTabla(datosEstudiantes)

    //imprimirTabla(local);
    console.log(datosEstudiantes)
    // console.log(JSON.parse(guardado))
  }
})


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

/* let inputEditar = document.createElement('input')
inputEditar.type = 'button'
inputEditar.value = 'editar'
inputEditar.setAttribute('class', 'btn btn-danger')
inputEditar.addEventListener('click', function () {
  alert('Button is clicked')
})
//input.setAttribute('class', 'btn-success')
document.body.appendChild(inputEditar)
 */

//imprimirTabla(local)
//console.log(promedio())
