import {Injectable} from '@angular/core';
import {Account} from './account';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: Account = {
    name: 'Free Checking',
    accountNumber: 4692,
    balance: 5824.76
  };

  accountBehavior = new BehaviorSubject(this.account);

  overdraftLimit = 500;

  constructor() {
  }

  getAccount(): BehaviorSubject<any> {
    return this.accountBehavior;
  }

  // Updates balance if not above overdraft Limit
  updateBalance(transferAmount: number): void {
    if (!this.aboveOverdraftLimit(transferAmount)) {
      this.account.balance = this.account.balance - transferAmount;
    }
    this.accountBehavior.next(this.account);
  }

  // Checks if amount would cause an overfraft over the limit
  aboveOverdraftLimit(transferAmount: number): boolean {
    if (transferAmount - this.account.balance > this.overdraftLimit) {
      return true;
    } else {
      return false;
    }
  }
}
