function DNAStrand([...dna]) {
  let result = [];
  for (let i = 0; i < dna.length; i++)
    if (dna[i] === "A") result.push("T");
    else if (dna[i] === "T") result.push("A");
    else if (dna[i] === "C") result.push("G");
    else if (dna[i] === "G") result.push("C");

  return result.join``;
}
