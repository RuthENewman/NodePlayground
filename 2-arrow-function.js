// const square = function(x) {
//   return x * x;
// }

const square = x => x * x;

console.log(square(3))

const event = {
  name: 'Maren Morris concert',
  venue: 'Albert Hall',
  attendees: ['Ruth', 'Sarah'],
  printTickets() {
    console.log(this.attendees.length + ' tickets for ' + this.name + ' at ' + this.venue)

    this.attendees.forEach((attendee) => {
      console.log(attendee + ' is attending the ' + this.name)
  })
}
}

event.printTickets();
