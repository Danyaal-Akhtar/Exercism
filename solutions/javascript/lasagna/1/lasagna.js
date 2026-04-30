
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
 
}


export function preparationTimeInMinutes(numberOfLayers) {
  const layerTime = 2;
  return numberOfLayers * layerTime;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparation = preparationTimeInMinutes(numberOfLayers);
  return preparation + actualMinutesInOven;
}
