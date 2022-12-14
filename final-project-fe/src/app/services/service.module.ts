import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from './announcementSrv';
import { UsedCarApiService } from './used-car-api.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [AnnouncementService],
  imports: [CommonModule, NgModule],
  providers: [AnnouncementService, UsedCarApiService],
})
export class ServiceModule {}
