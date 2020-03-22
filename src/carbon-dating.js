const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if(
      !sampleActivity ||
      typeof sampleActivity !== 'string' ||
      isNaN(sample) ||
      sample > 15 ||
      sample <= 0

  ) {
    return false;
  }



  let k = 0.693 / HALF_LIFE_PERIOD;
  let log1 = Math.log(MODERN_ACTIVITY/sample);
  return Math.ceil(log1/k);


};
