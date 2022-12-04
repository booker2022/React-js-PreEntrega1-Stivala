export const promesaProd = (productos) => {

    return new Promise ((res, rej) =>  {
        setTimeout ( () => {
            res(productos)
        }, 3000)
    }) 
}   