import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('timePicker') timePicker: IonDatetime;
  customTimePickerOptions: any;
  timePickerMin;
  timePickerMax;

  constructor() {
    this.customTimePickerOptions = {
      buttons: [{
        text: 'Dismiss',
        handler: () => {
          this.onTimePickerDismiss();
          // return false; <-- do not dismiss
        }
      },
      {
        text: 'Confirm',
        handler: (data) => { this.onTimePickerConfirm(data); }
      }]
    };
  }

  openTimePicker() {
    this.timePickerMin = '2020-09-15T21:58:35+02:00';
    this.timePickerMax = '2020-09-16T01:58:35+02:00';

    /* UNCOMMENT following lines and it will work as expected!
    this.timePickerMin = '2020-09-15T09:58:35+02:00'; // <-- this dates works as expected, when you uncomment
    this.timePickerMax = '2020-09-15T12:30:35+02:00'; // <-- this dates works as expected, when you uncomment
    */
    this.timePicker.open();
  }

  onTimePickerDismiss() {

  }

  onTimePickerConfirm(data) {
    console.log(data);
  }

}
