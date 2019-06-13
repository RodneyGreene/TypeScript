//How to use custom types in TypeScript..

//instead of passing x and y as (x, y) it is better to pass an object
let drawPoint = (x, y) => {
    //..
}

//Like so using inline annotation.. too verbose. use an interface.
let drawPointProper = (point: { x: number, y: number }) => {
    //..
}

drawPointProper ({
    x: 1,
    y: 2
})

//let's try an interface
interface InterfacePoint {
    x: number,
    y: number
}

let drawInterfacePoint = (interfacePoint: InterfacePoint) => {
    //..
}

drawInterfacePoint ({
    x: 1,
    y: 2
})