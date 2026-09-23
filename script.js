///countdown cards scrips
const Jana_Bday = {month: 9,day: 26};
const today = new Date();

function nextBirthday(m, d, fromDate) {
  const year = fromDate.getFullYear();
  let birthday = new Date(year, m - 1, d, 0,0,0);
  if (birthday < fromDate) {
    birthday = new Date(year + 1, m - 1, d, 0,0,0);
  }
  return birthday;
}

function formatRemaining(ms){
    if (ms < 0) return "Today!";
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    return `${d} days, ${h % 24} hours, ${m % 60} minutes, ${s % 60} seconds`;
}

function updateTimers(){
    const now = new Date();
    const nextBday = nextBirthday(Jana_Bday.month, Jana_Bday.day, now);
    const birthdayCount =document.getElementById("geburtstags-zähler");
    document.getElementById("nächster-geburtstag").textContent = nextBday.toDateString();

    if(now.getMonth() === Jana_Bday.month - 1 && now.getDate() === Jana_Bday.day){
        birthdayCount.textContent = "Happy Birthday!!!";
    } else {
        birthdayCount.textContent = formatRemaining(nextBday - now);
    }
  
    const diff = now - StartDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("days-since").textContent = days;

} 
setInterval(updateTimers, 1000);
updateTimers();