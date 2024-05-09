import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  appsOutline,
  appsSharp,
  checkbox,
  checkboxOutline,
  checkboxSharp,
  logOutOutline,
  logOutSharp,
  mailOutline,
  mailSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'apps' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Tasks', url: '/folder/tasks', icon: 'checkbox' },
    { title: 'Logout', url: '/folder/logout', icon: 'log-out' },
  ];

  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      checkboxOutline,
      checkboxSharp,
      appsOutline,
      appsSharp,
      logOutOutline,
      logOutSharp,
    });
  }
}
