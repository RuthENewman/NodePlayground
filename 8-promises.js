const makeAPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(['14', '10', '88'])
    reject('Ooops, something went wrong')
    resolve(['see', 'if', 'anything', 'happens'])
  }, 2000)
})

makeAPromise.then((result) => {
  console.log('Victory', result)
}).catch((error) => {
  console.log('Error', error)
})
