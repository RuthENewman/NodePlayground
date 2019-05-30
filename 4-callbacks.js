const names = ['Ruth', 'Naomi', 'Sarah']

const shortNames = names.filter((name) => {
  return name.length <= 4;
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    return callback(data);
  },2000)
}

const data = geocode('Philadelphia', (geocodeData) => {
  console.log(geocodeData);
})

const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2)
  }, 2000)
}

add(1,4, (sum) => {
  console.log(sum)
})
