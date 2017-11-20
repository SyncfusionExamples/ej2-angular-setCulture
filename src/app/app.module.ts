import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the GridModule for the Grid component
import { NumericTextBoxModule  } from '@syncfusion/ej2-ng-inputs';
import { AppComponent } from './app.component';
import {loadCldr, setCulture, setCurrencyCode} from '@syncfusion/ej2-base';
// setCulture('de');
// setCurrencyCode('EUR');
@NgModule({
  imports: [BrowserModule, NumericTextBoxModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
