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




const sigDelDoble = (x,done)=>{
  dobleDe(x,next2 =>{
    siguiente(next2,next3=>{
      done(next3)
    })
  })
}

sigDelDoble(8,resultado => {
  console.log('el siguiente del doble 8 =>', resultado)
})



const dobleDelSiguiente = (x,next) =>{
  siguiente (x,res =>{
    dobleDe(res, i => {
      next(i)
    }) 
  })
}


dobleDelSiguiente(8, resultado =>{
  console.log('el doble del siguiente de 8 =>', resultado)
})



const cuadrupleDeOcho= (x,next) => {
  dobleDe(x,i =>{
    dobleDe(i,res =>{
      next(res)
    })
  })

}

cuadrupleDeOcho(8,res=>{
  console.log("cuadruple de 8 =>", res)
})