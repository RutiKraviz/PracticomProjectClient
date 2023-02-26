import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './compontents/form/form.component';
import { HomeComponent } from './compontents/home/home.component';
import { InstructionsComponent } from './compontents/instructions/instructions.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  {path: "home", component: HomeComponent},
  { path: "form", component: FormComponent },
  { path: "instruction", component: InstructionsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
