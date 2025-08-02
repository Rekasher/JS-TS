const solution = (str, ending) => str.slice(str.length - ending.length) === ending;


console.log(solution('samurai', 'ai'))