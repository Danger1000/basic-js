const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const period = 0.693 / HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActiv) {
  if (typeof sampleActiv != 'string' || hasLetters(sampleActiv) || invalidRange(sampleActiv)) {
    return false;
  }
  const actualActivity = parseFloat(sampleActiv);
  const age = Math.log(MODERN_ACTIVITY / actualActivity) / period;
  return Math.ceil(age);
};
function hasLetters(str) {
  return /[A-Za-z]/.test(str)
}
function invalidRange(activ) {
  const float = parseFloat(activ);
  return float <= 0 || float >= MODERN_ACTIVITY;
};
