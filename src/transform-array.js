module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw 'an error';
  let double = false;
  arr = arr.reduce((changed, e) => {
    switch (e) {
      case '--double-next':
        double = true;
        break;
      case '--double-prev':
        if (changed.length > 0) changed.push(changed[changed.length - 1]);
        break;
      default:
        if (double) {
          changed.push(e);
          double = false;
        }
        changed.push(e);
        break;
    }
      return changed;
  }, []);

  let block = false;
  arr = arr.reduce((changed, e) => {
    switch (e) {
      case '--discard-next':
        block = true;
        break;
      case '--discard-prev':
        changed.pop();
        break;
      default:
        if (block) {
        block = false;
      } else {
        changed.push(e);
      }
      break;
      }
      return changed;
  }, []);
  return arr;
};
