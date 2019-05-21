module.exports = {
  fixedPoint : Math.pow(10, 8),
  defaultCurrency: 'SRN', // default currency symbole for Belrium
  totalSupply: 21000000000000000,
  URL: "http://localhost:9305",
  fees: {
    send: 0.1,
    inTransfer: 0.1,
    outTransfer: 0.1,
    addTask: 0.1,
    completeTask: 0.1
  }
}
