function distanceFromHqInBlocks(someValue) {
    let equation = undefined
    if(someValue > 42){
        equation = someValue - 42
    }
    else{
        equation = 42 - someValue
    }
    return equation
  }

  function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
  }

  function distanceTravelledInFeet(start, destination) {
      let equation = " "
      if(start > destination){
        equation = start - destination
      }else{
          equation = destination - start
      }
    return ( equation) * 264
  }

  function calculatesFarePrice(start, destination) {
      let distance = distanceTravelledInFeet(start,destination)
      let price = ""
      if( distance <= 400){
          price = 0
      }
      if(distance > 400 && distance < 2000){
          distance = distance - 400
          price = (distance * (2/100))
      }
      if (distance > 2000 && distance < 2500){
          price = 25
      }
      if(distance > 2500){
          price = "cannot travel that far"
      }
      return price
}

console.log(calculatesFarePrice(43,42))