function breakOut(array, changeValue, stopValue){
    for (let i = 0; i < array.length; i++) {
        debugger
      if (array[i] !== stopValue) {
         array[i] = changeValue
      }else{
          break
      }
    } return array
  }

  