class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
        }
        const newAlarm = {
            time,
            callback,
            canCall: true
          };
          this.alarmCollection.push(newAlarm);
    }
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime () {
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    start () {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
              if (alarm.time === currentTime && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
              }
            });
        }, 1000);
    }
    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls () {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}