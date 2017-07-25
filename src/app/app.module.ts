import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    TextfieldComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalcComponent,
     TextfieldComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
