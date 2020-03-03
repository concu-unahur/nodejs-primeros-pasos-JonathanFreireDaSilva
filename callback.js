function siguiente(x, done) {
  done(x + 1)
}

siguiente(2, resultado => { 
  console.log('Siguiente de 2 =>', resultado)
})


 const dobleDe = (x,done) => {
  done(x*2)
}

dobleDe(8, resultado => {
  console.log('el doble de 8 =>', resultado)
})




const sigDelDoble = (x,done) =>{
    siguiente (x,resulado =>{
      dobleDe(resulado, i => {
        done(i)
      }) 
    })
}

sigDelDoble(8,resultado => {
  console.log('el siguiente del doble 8 =>', resultado)
})



