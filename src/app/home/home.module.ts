import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  providers: [ ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
