import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TransferComponent} from './transfer/transfer.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxCurrencyModule} from 'ngx-currency';
import {TransactionListComponent} from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransferComponent,
    TransactionsComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
