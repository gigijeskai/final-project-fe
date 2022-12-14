import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementPage } from './announcement.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  declarations: [AnnouncementPage],
  imports: [CommonModule, FormsModule, ComponentsModule, ModalModule],
})
export class AnnouncementModule {}
