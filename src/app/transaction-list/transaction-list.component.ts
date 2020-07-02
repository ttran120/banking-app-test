import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  @Input() filterString: string;
  @Input() transactions: Transaction[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
