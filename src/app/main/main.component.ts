import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import{MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent}from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavContainer,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavContent,
    MatNavList,
    MatSidenav,
    MatDrawer,
    MatDrawerContent,
    MatDrawerContainer,
    MatListItem,
    Component1Component,
    Component2Component,
    RouterLink,
    FormsModule

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
