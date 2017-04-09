import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { Employer } from '../../models/Employer';

@Component({
    templateUrl: 'employerModal.html',
})

export class EmployerModal{
    public employer: Employer;

    constructor(public viewCtrl: ViewController){

    }

    close(){
        this.viewCtrl.dismiss(false)
    }

    create(){
        
    }
}