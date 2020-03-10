module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1) {
    let depths = [];
    for (let el of array) {
      if (!Array.isArray(el)) {
        continue;
      }
      depths.push(this.calculateDepth(el, depth + 1));
    }
    return Math.max(depth, ...depths);
  }
};
