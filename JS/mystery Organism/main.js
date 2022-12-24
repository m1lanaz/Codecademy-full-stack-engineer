// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 16);
      const indexBase = this.dna[randomIndex];
      this.dna[randomIndex] = returnRandBase();
      while(this.dna[randomIndex] === indexBase){
        this.dna[randomIndex] = returnRandBase();
      };

    },
    compareDNA(pAequor) {
      let arrayLength = this.dna.length + 1;
      let notSame = 0;
      for(var i = 0; i < this.dna.length; i++){
        if(this.dna[i] != pAequor[i]){
          notSame ++
        }
      }
      let getPercentage = (notSame / arrayLength) * 100;
      console.log(`The percentage of similarity is ${getPercentage}`);
    }
  }
  
}



