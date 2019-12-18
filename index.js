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
    if (foods[i]==='cheddar' || foods[i]==='gouda' || foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return 'no cheese!'
}
