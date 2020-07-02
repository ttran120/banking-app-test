import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {TransactionsService} from '../transactions.service';
import {Transaction} from '../transaction';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  transactionModel: Transaction[] = [];
  // Another transactions list we can filter without mutating original data
  transactionDisplayModel: Transaction[] = [];

  private transactionSubscription: Subscription;
  filter = '';

  sortDateOrder = '';
  sortBeneficiaryOrder = '';
  sortAmountOrder = '';

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactionSubscription = this.transactionsService.getTransactions().subscribe(
      res => {
        // When a new transactions list comes in, sets the transaction list to display and applies the current filter
        this.transactionModel = res;
        // Make a copy of the transaction list that won't mutate the original
        this.transactionDisplayModel = this.transactionModel.slice();
        this.filterTransactions();
      }
    );
  }

  clearFilter(): void {
    this.filter = '';
    this.filterTransactions();
  }

  // Controls the sorting by the date
  sortDate(): void {
    // Removes other sorting
    this.sortBeneficiaryOrder = '';
    this.sortAmountOrder = '';

    if (this.sortDateOrder === 'ASC') {
      this.sortDateOrder = 'DSC';
    } else if (this.sortDateOrder === 'DSC') {
      this.sortDateOrder = 'ASC';
    }

    if (this.sortDateOrder === '') {
      this.sortDateOrder = 'DSC';
    }
    this.transactionsService.sortDate(this.sortDateOrder);
    this.filterTransactions();
  }

  // Controls the sorting by the beneficiary
  sortBeneficiary(): void {
    // Removes other sorting
    this.sortDateOrder = '';
    this.sortAmountOrder = '';

    if (this.sortBeneficiaryOrder === 'ASC') {
      this.sortBeneficiaryOrder = 'DSC';
    } else if (this.sortBeneficiaryOrder === 'DSC') {
      this.sortBeneficiaryOrder = 'ASC';
    }

    if (this.sortBeneficiaryOrder === '') {
      this.sortBeneficiaryOrder = 'DSC';
    }
    this.transactionsService.sortBeneficiary(this.sortBeneficiaryOrder);
    this.filterTransactions();
  }

  // Controls the sorting by the amount
  sortAmount(): void {
    // Removes other sorting
    this.sortDateOrder = '';
    this.sortBeneficiaryOrder = '';

    if (this.sortAmountOrder === 'ASC') {
      this.sortAmountOrder = 'DSC';
    } else if (this.sortAmountOrder === 'DSC') {
      this.sortAmountOrder = 'ASC';
    }

    if (this.sortAmountOrder === '') {
      this.sortAmountOrder = 'DSC';
    }
    this.transactionsService.sortAmount(this.sortAmountOrder);
    this.filterTransactions();
  }

  filterTransactions(): void {
    // Applies filter to the displayed transaction list
    this.transactionDisplayModel = this.transactionModel.filter(
      // Filters transactions list with filter text coming from user
      transaction =>
        transaction.merchant.toLowerCase().includes(this.filter.toLowerCase()) ||
        transaction.transactionType.toLowerCase().includes(this.filter.toLowerCase()) ||
        transaction.amount.toString().includes(this.filter)
      );
  }

  ngOnDestroy(): void {
    this.transactionSubscription.unsubscribe();
  }
}
