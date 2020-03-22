module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!"
  }
  if(date.getMilliseconds() === 0){
    throw new Error();
  }

  const month = date.getMonth();
  if(month===11) return 'winter';
  else if(month >= 8) return 'autumn';
  else if(month >= 5) return 'summer';
  else if(month >= 2) return 'spring';
  else return 'winter';
};
