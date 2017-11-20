import { Component, OnInit, ElementRef } from '@angular/core';
import { loadCldr, setCulture, setCurrencyCode, Internationalization, L10n } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');
declare let require: Function;
@Component({
  selector: 'app-root',
  // specifies the template string for the Grid component
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public formattedData: any = 'check';

  constructor(private ngEle: ElementRef) {
    loadCldr(
      require('../../node_modules/cldr-data/supplemental/numberingSystems.json'),
      require('../../node_modules/cldr-data/main/de/ca-gregorian.json'),
      require('../../node_modules/cldr-data/main/de/currencies.json'),
      require('../../node_modules/cldr-data/main/de/numbers.json'),
      require('../../node_modules/cldr-data/main/de/timeZoneNames.json')
    );
    L10n.load({
      'de': {
          'numerictextbox': {
              incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
          }
      }
  });
  }

  ngOnInit(): void {
   this.formattedData = new Internationalization().formatNumber(7879879, { format: 'C2'});
  }
}
