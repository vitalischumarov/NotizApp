import { Component, signal } from '@angular/core';
import {HeaderComponent} from './components/header-component/header-component';
import {LeftSiteComponent} from './components/LeftSite/left-site-component/left-site-component';
import {MainAreaComponent} from './components/MainArea/main-area-component/main-area-component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeftSiteComponent, MainAreaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NotizenApp');
}
