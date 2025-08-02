const forSixTeen = (...values) => values.map(value => {
    const formatedValue = value.toString(16).toUpperCase()
    return formatedValue.length === 1 ? '0' + formatedValue : formatedValue
});
const validation = (...values) => values.map(value => value > 255 ? 255 : value < 0 ? 0 : value);
const rgb = (r, g, b) => {
    const rgb = validation(r, g, b);
    return forSixTeen(...rgb).join('')
}

console.log(rgb(0,255, 30))

