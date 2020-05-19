class CountdownTimer {
  constructor(obj) {
    this.obj = obj;
    this.days = document.querySelector("[data-value='days']");
    this.hours = document.querySelector("[data-value='hours']");
    this.mins = document.querySelector("[data-value='mins']");
    this.secs = document.querySelector("[data-value='secs']");
  }
  showTimer() {
    this.now = Date.now();
    this.timeobj = this.obj.targetDate - this.now;
    this.daysobj = Math.floor(this.timeobj / (1000 * 60 * 60 * 24));
    this.hoursobj = Math.floor(
      (this.timeobj % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minsobj = Math.floor((this.timeobj % (1000 * 60 * 60)) / (1000 * 60));
    this.secsobj = Math.floor((this.timeobj % (1000 * 60)) / 1000);
    this.days.textContent = this.daysobj;
    this.hours.textContent = this.hoursobj;
    this.mins.textContent = this.minsobj;
    this.secs.textContent = this.secsobj;
    setInterval(() => {
      this.showTimer();
    }, 1000);
  }
}
let timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("6, 17, 2020"),
});

timer.showTimer();
