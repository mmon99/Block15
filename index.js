function yogurt (){
  const listOfFlavor = prompt ("Please choose your flavor", "vanilla,strawberry,bananna,mango,coffee,vanilla,coffee")
  console.log(listOfFlavor)

  const itemOfFlavor = listOfFlavor.split(",")
  console.log(itemOfFlavor)

  const flavorOfYogurt = {};
  for(let i = 0; i < itemOfFlavor.length; i++) {
    const currentChoice = Object.keys(flavorOfYogurt)
    const currentFlavor = itemOfFlavor[i]
    console.log(currentChoice.includes(currentFlavor))

    if (!currentChoice.includes(currentFlavor)){
      flavorOfYogurt[currentFlavor] = 1
    }else{
      flavorOfYogurt[currentFlavor] = flavorOfYogurt[currentFlavor] + 1
    }
  }
return flavorOfYogurt
}
  
console.log(yogurt())
