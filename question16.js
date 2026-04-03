let card = '1234567812345678'
let MaskCard = card.slice(-4).padStart(card.length, '*')

console.log(MaskCard)
