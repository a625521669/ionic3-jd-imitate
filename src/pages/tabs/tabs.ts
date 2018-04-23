import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CatalogsPage } from '../catalogs/catalogs';

@Component({
  selector: 'page-home',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CatalogsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
