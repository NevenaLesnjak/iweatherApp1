import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Storage} from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get('location').then(val => {
      if(val != null){
        let.location = JSON.parse(val);
        this.state = location.state;
        this.city = location.city;
      } else{
        alert('default')
      }
        let location = {
          city: 'Kragujevac',
          state: 'RS'
        }
        this.location = {
          city: 'Kragujevac',
          state: 'RS'
        }
      
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage)

  }
}
}
