import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageGuardService } from './services/admin-page-guard-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryFilterComponent,
    FileUploadComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [AdminPageGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
