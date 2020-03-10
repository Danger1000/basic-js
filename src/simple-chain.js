const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    let chain = value === undefined ? '' : value;
      this.chains.push(`( ${chain} )`);
      return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position > this.chains.length) {
      this.chains = [];
      throw new Error();
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};
module.exports = chainMaker;
