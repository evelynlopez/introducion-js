const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  
  const ocurrencia = () => {
      let arr = [];
     input.forEach(elem =>{
         elem.forEach(elem2 =>{
             arr.push(elem2);
         })
      })
      return arr.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});
  }
  
   console.log("Ejecuta",ocurrencia())