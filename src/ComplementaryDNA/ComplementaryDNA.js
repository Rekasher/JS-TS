function dnaStrand(dna){
    return dna.replace(/[ATCG]/gi, (char) => {
       switch (char.toUpperCase()) {
           case 'A': return 'T';
           case 'T': return 'A';
           case 'C': return 'G';
           case 'G': return 'C';
       }
    });
}

console.log(dnaStrand('AAAA'))