// const square = function(x) {
//   return x * x;
// }

const square = x => x * x;

console.log(square(3))

const event = {
  name: 'Maren Morris concert at Albert Hall',
  printTickets: function() {
    console.log('2 tickets for ' + this.name)
  }
}

event.printTickets();
