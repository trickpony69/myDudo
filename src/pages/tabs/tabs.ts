import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { HomeListe } from '../home-liste/home-liste';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home = HomeListe;
  impostazioni = SettingsPage;
  // tab2Params = { id: HomeListe };

  constructor(){}
}
