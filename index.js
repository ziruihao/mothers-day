var happyI = 0;
var motherI = 0;
var dayI = 0;

var happy = 'Happy';
var mother = "Mother's";
var day = 'Day!';

var speed = 500; /* The speed/duration of the effect in milliseconds */

async function typeWriter() {
  await typeHappy();
  await typeMother();
  await typeDay();
}

async function typeHappy() {
  if (happyI < happy.length) {
    document.getElementById("happy").innerHTML += happy.charAt(happyI);
    happyI++;
     await setTimeout(typeHappy, speed);
  }
}
async function typeMother() {
  if (motherI < mother.length) {
    document.getElementById("mother").innerHTML += mother.charAt(motherI);
    motherI++;
    await setTimeout(typeMother, speed);
  }
}
async function typeDay() {
  if (dayI < day.length) {
    document.getElementById("day").innerHTML += day.charAt(dayI);
    dayI++;
    await setTimeout(typeDay, speed);
  }
}