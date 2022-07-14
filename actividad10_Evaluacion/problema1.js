// Problema 1:
//Crea una función para encontrar la diferencia de edad entre el 
// miembro mas viejo y el más jóven de la familia. 
// Retorna como resultado un objeto indicando las edades de cada miembro, 
// y la diferencia de edad.

const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  var array = [];
  var counter;

  function diferencia(Family){
    for( var i= 0 ; i < Family.length ; i++){
        array[i] =Family[i].age
        counter=i
    }
    array.sort(function(a, b) {return a - b})
    return "menor:"+array[0]+" mayor:"+array[counter]+" diferencia:"+(array[counter] - array[0] )
  }
  console.log( diferencia(Family))
  
