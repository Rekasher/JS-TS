const alphanumeric = s => /^[A-Za-z0-9]+$/.test(s);


console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("    "));