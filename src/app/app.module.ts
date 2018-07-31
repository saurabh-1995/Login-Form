import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes : Routes = [
  {
    path:'displayform',
    component:ViewComponent
  },
  {
    path:'editform',
    component:EditComponent
  },
  {
    path:'',
    component:EditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
