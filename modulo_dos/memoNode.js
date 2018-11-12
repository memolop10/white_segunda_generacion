
//Ejercicio 1
/*const mujeres = {
    rak: "koder",
    caro: "koder",
    daniela: "koder"
  }
  const hombres = {
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
  }


  let koders = {...mujeres, ...hombres}

  console.log(koders)*/


  //Ejercicio 2
  /*const koders = {
    rak: "koder",
    caro: "koder",
    daniela: "koder",
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
  }

  const {rak,caro,daniela} = koders;
  console.log({rak,caro,daniela})*/


  //Ejercicio 3
  const koders = {
    rak: "koder",
    caro: "koder",
    daniela: "koder",
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
  }

  const {rak:Raquel,
        caro:Carolina,
        daniela:Daniela,
        antonio:Antonio,
        daniel:Daniel,
        edwin:Edwin,
        manuel:Manuel
        } = koders

        console.log({Raquel,
            Carolina,
            Daniela,
            Antonio,
            Daniel,
            Edwin,
            Manuel} )