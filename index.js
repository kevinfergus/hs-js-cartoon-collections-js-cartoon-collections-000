function dwarfRollCall(dwarves) {
  let rollCall = []
  for (let i=0; i<dwarves.length; i++) {
    rollCall.push(`${i+1}. ${dwarves[i]} `)
  }
  return rollCall.join('')
}

function summonCaptainPlanet(planeteerCalls){
  let summon = []
  
  for (let i = 0; i <planeteerCalls.length; i ++) {
    let call = `${planeteerCalls[i].toUpperCase()}!`
    summon.push(call)
   }
   return summon
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i ++) {
    if (words[i].length>4) {
      return true
    }
    return false
  }
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i ++) {
    if (foods[i]==='cheddar' || foods[i]==='gouda' || foods[i] === 'camembert' ||  foods[i]==='swiss') {
      return foods[i]
    }
  }
  return 'no cheese!'
}

function wordsWithB(words) {
  //take in array of words, return new array with all the words from the first array that start with the letter b
  
  let wordsWithB= []
  
  let (i=0; i<words.length; i ++) {
    
  }
}
