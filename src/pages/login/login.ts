import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SessionProvider } from '../../providers/session/session';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loading: Loading;
  private email;
  private password;
  private name;
  constructor(public navCtrl: NavController, public session: SessionProvider, public loadingCtrl: LoadingController) { }

  register() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.session.signupUser(this.email, this.password, this.name).then(
      () => {
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(TabsPage);
        });
      },
      error => {
        this.loading.dismiss().then(() => {
          alert(error.message);
        });
      }
    );
  }

  login(): void {
    this.session.loginUser(this.email, this.password).then(
      authData => {
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(TabsPage);
        });
      },
      error => {
        this.loading.dismiss().then(() => {
          alert(error.message);
        });
      }
    );
    this.loading = this.loadingCtrl.create({
      content: `<img src="assets/imgs/loader.svg"/>`,
      spinner: 'hide',
     
    });
    this.loading.present();
  }

}