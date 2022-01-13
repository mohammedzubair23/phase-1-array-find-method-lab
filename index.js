// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

 function superbowlWin(records) {
    const superBowlWins = records.find(record => record.result === "W")
        if(superBowlWins) {
            return superBowlWins.year
        } else {
            return undefined 
        }
 }
  
