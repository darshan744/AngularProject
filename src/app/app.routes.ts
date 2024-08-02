import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'component1',component:Component1Component
    },
    {
        path:'component2',component:Component2Component
    }
    ,{
        path:'',component:LoginComponent
    },
    {
        path:'main',component:MainComponent
    }

];
