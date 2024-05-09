import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonSplitPane,
  IonRouterOutlet,
  IonContent,
  IonMenu,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  checkboxOutline,
  checkboxSharp,
  appsOutline,
  appsSharp,
  logOutOutline,
  logOutSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonRouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
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
export class SidebarComponent implements OnInit {
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

  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'apps' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Tasks', url: '/folder/tasks', icon: 'checkbox' },
    { title: 'Logout', url: '/folder/logout', icon: 'log-out' },
  ];

  ngOnInit() {}
}
