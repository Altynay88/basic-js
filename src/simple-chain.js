const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   chains: [],
  getLength() {
     return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
           const index = position - 1;
           if (this.chains[index] === undefined) {
             this.chains = [];
             throw new Error("You can't remove incorrect link!");
           }
           this.chains.splice(index, 1);
           return this;
  },
  reverseChain() {
       this.chains.reverse();
       return this;

  },
  finishChain() {
       let finish = this.chains.join("~~");
       this.chains.length = 0;
       return finish;

  }
};

module.exports = {
  chainMaker
};
