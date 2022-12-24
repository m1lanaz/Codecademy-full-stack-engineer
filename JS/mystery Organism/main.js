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
      const indexBase = dna[randomIndex];
      dna[randomIndex] = returnRandBase();
      while(dna[randomIndex] === indexBase){
        dna[randomIndex] = returnRandBase();
      };

    }
  }
  
}






