function getMinPlane(airportFuel) {
    const n = airportFuel.length;
    let planesNeeded = 0;
    let currentFuel = 0;
    let maxFuel = 0;
  
    for (let i = 0; i < n - 1; i++) {
      maxFuel = Math.max(maxFuel, airportFuel[i]);
      currentFuel--;
  
      if (currentFuel < 0) {
        if (maxFuel === 0) {
          return -1; // Not possible to reach the last airport
        }
  
        currentFuel = maxFuel - 1;
        planesNeeded++;
        maxFuel = 0;
      }
    }
  
    return planesNeeded;
  }
  
  // Example usage:
  const fuelArray1 = [2, 1, 2, 3, 1];
  const fuelArray2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
  
  console.log(getMinPlane(fuelArray1)); // Output: 2
  console.log(getMinPlane(fuelArray2)); // Output: 3