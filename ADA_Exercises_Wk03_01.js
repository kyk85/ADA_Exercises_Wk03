var colors=['red','orange','yellow','green'];
document.write(colors);

//Retrieving a value in array via index
document.write("<br/>");
document.write(colors[2]);


//length: This is to get how many items are in an array
document.write("<br/>");
document.write(colors.length);

//push: This is to add a new item at the end of an array
document.write("<br/>");
colors.push('blue');
document.write(colors);

//pop :This is to remove and retrieve the last item of an array
document.write("<br/>");
colors.pop();
document.write(colors);

document.write("<hr/>");

var locations=['Johor','Pahang','Kedah','Melaka']
document.write(locations);
document.write("<br/>");
document.write(locations[1]);
document.write("<br/>");
document.write(locations.length);
document.write("<br/>");

for (i=0;i<locations.length;i++){
document.write(locations[i])
document.write("<br/>")
}

document.write("<hr/>")

function longestWord(sentence) {
  var maxCharacter=0;
  var stringArray=sentence.split(" ");
  for (i=0;i<stringArray.length;i++){
    if (stringArray[i].length>maxCharacter) {
      maxCharacter=stringArray[i].length;
    }
  //document.write(stringArray[i] + " has " + stringArray[i].length + " words.")
  //document.write("<br/>");
 }
return maxCharacter 
}

document.write(longestWord("ADA stands for Asia Developer Academy"));

document.write("<hr/>");

var hotel01 = {
  name: 'Hilton',
  rooms: 40,
  booked: 25,
  checkAvailability: function(){
    return this.rooms-this.booked;
  }
}

var hotel02 = {
  name: 'Mariott',
  rooms: 1000,
  booked: 123,
  checkAvailability: function(){
    return this.rooms-this.booked;
  }
}

var hotel03 = {
  name: 'Trump',
  rooms: 555,
  booked: 271,
  checkAvailability: function(){
    return this.rooms-this.booked;
  }
}

document.write(hotel01.name);
document.write("<br/>")
document.write(hotel01.checkAvailability());
document.write("<br/>")
document.write(hotel02.name);
document.write("<br/>")
document.write(hotel02.checkAvailability());
document.write("<br/>")
document.write(hotel03.name);
document.write("<br/>")
document.write(hotel03.checkAvailability());
document.write("<br/>")

document.write("<hr/>");

function hotel(name,rooms,booked) {
  this.name=name;
  this.rooms=rooms;
  this.booked=booked;
  this.checkAvailibility=function() {
    return this.rooms-this.booked;
  }
  this.bookRoom=function(){
    this.booked++;
  }
}


var ritzHotel = new hotel('Ritz',700,25);

document.write(ritzHotel.rooms);
ritzHotel.bookRoom();
document.write("<br/>")
document.write(ritzHotel.booked);
