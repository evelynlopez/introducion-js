let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]
var promedio=0
var counter=0
var calificaciones=[]
let alumno=[
    {
        nombre: "",
        promedio:""
    },{
        nombre: "",
        promedio:""
    }
]
var calificacion= (info)=>{
    for (var i = 0 ; i <info.length ; i++){
        var suma=0
        var contador=0
        alumno[i].nombre=info[i].nombre
        for(var j = 0; j <info[i].materias.length; j++){
            promedio =info[i].materias[j].calificacion
            counter++
            calificaciones[counter-1]=promedio
            contador=contador+1
            suma= Number(suma)+Number(promedio)
        }
        alumno[i].promedio=suma/contador
    }
    calificaciones.sort(function(a, b) {return a - b})
    console.log("calificaciones del grupo:"+calificaciones)
    console.log(alumno)
    console.log("calificación mas baja:"+calificaciones[0]+" - calificación mas alta:"+ calificaciones[counter-1])
} 
 calificacion(info)
