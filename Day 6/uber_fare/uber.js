class UberAuto {
  constructor(baseFare, costPerKm, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMinute = costPerMinute;
  }

  calculateFare(distanceInKm, timeInMinutes) {
    const distanceCost = distanceInKm * this.costPerKm;
    const timeCost = timeInMinutes * this.costPerMinute;
    const totalFare = this.baseFare + distanceCost + timeCost;
    return totalFare;
  }
}

const autoUber = new UberAuto(30, 8, 2);

const distance = 5;
const time = 15;

const fare = autoUber.calculateFare(distance, time);
console.log(
  "The fare for a" +
    " " +
    distance +
    "" +
    "km ride taking" +
    " " +
    time +
    "" +
    "minutes is" +
    " " +
    fare
);
