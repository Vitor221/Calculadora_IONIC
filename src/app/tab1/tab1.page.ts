import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

 async presentAlert(){
    console.info("Batata Rústica com sal grosso molho aioli");
    console.warn("pipipipopopo");
    console.error("mimimomomo");
    console.log("tutututatata");



  const alert = await this.alertController.create({
    header: 'Alert!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.handlerMessage = 'Alert confirmed';
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  this.roleMessage = `Dismissed with role: ${role}`;

  console.log("igual o outro lá")
  console.log("batata assada" , this.roleMessage)
}
}

