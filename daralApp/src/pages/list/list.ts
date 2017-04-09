import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { EmployerModal } from '../../modals/employerModal/employerModal';

import { EmployerGroup } from '../../models/EmployerGroup';
import { Employer } from '../../models/Employer';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public employerGroups: EmployerGroup[];
  public employers: Array<Employer>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // this.icons = ['ios-person', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.employerGroups = new Array<EmployerGroup>();
    this.employers = new Array<Employer>();
    let testEmployer = {Name:'Bartłomiej Stępień', Telephone:"+46733445156"};
    let testEmployer1 = {Name: 'Dariusz Stępień', Telephone: "+46735766941"};
    let testEmployer2 = {Name: 'Alicja Stępień', Telephone: "+46722510283"};
    this.employers.push(testEmployer as Employer);
    this.employers.push(testEmployer1 as Employer);
    this.employers.push(testEmployer2 as Employer);

    let testEmployerGroup = {Group:"Rodzinka", Employers: this.employers};

    this.employerGroups.push(testEmployerGroup);

    console.log(this.employers[0]);
    console.log(this.employerGroups[0]);

// this.items = [];
//     for(let i = 1; i <= this.employers.length; i++){
//       this.items.push({
//         title: this.employers[i-1].Name,
//         note: 'Phone Number: ' + this.employers[i-1].Telephone,
//         icon: 'ios-person'
//       });
//     }

    // this.items = [];
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  addEmployer(){
      console.log("Adding employer started... provide us some data");

      let modal = this.modalCtrl.create(EmployerModal);
      modal.present();
  }
}
