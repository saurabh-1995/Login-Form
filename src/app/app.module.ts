import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { FormService } from './form.service';
import { ObserverComponent } from './observer/observer.component';

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
    ObserverComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
