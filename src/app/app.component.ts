import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


constructor( public plt: Platform) {

//  this.plt.ready().then((readySource) => {

//    console.log('Platform ready from', readySource);

//    this.bluetoothle.initialize().subscribe(ble => {
//      console.log('ble', ble.status);
//    });

//   });
}
}
