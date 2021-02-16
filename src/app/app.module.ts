import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BasicformComponent } from './components/basicform/basicform.component';
import { PdatabindingComponent } from './components/pdatabinding/pdatabinding.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgIFComponent } from './components/ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { EmojiDirective } from './directives/emoji.directive';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { GnederPipe } from './pipes/gneder.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ChildOneComponent } from './components/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    EmployeeComponent,
    BasicformComponent,
    PdatabindingComponent,
    NgSwitchComponent,
    NgIFComponent,
    NgClassComponent,
    NgStyleComponent,
    ChangeColorDirective,
    CustomDirectiveComponent,
    EmojiDirective,
    BuiltInPipesComponent,
    CurrencyPipe,
    GnederPipe,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ChildOneComponent
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
