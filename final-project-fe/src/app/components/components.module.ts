import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.page';
import { FormsModule } from '@angular/forms';
import { SearchBarUsedComponent } from './search-bar/search-bar-used.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchBarUsedComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [
    SearchBarComponent,
    NavbarComponent,
    FooterComponent,
    SearchBarUsedComponent,
  ],
})
export class ComponentsModule {}
