import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { AdminPageGuardService } from './services/admin-page-guard-service.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category-filter', component: CategoryFilterComponent },
  { path: 'file-upload', component: FileUploadComponent},
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AdminPageGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
