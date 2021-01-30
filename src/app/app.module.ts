import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BasicformComponent } from './components/basicform/basicform.component';
import { PdatabindingComponent } from './components/pdatabinding/pdatabinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    EmployeeComponent,
    BasicformComponent,
    PdatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
