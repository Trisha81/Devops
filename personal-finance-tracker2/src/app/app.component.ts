import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .container {
      max-width: 700px;
      margin: 50px auto;
    }

    h1 {
      text-align: center;
      color: #1b5e20;
      margin-bottom: 40px;
      font-size: 36px;
    }

    .card {
      background: white;
      padding: 25px;
      margin-bottom: 25px;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }

    .input-group {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }

    input {
      flex: 1;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 14px;
    }

    button {
      padding: 10px 18px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-weight: 600;
    }

    .income-btn {
      background: #4caf50;
      color: white;
    }

    .expense-btn {
      background: #e53935;
      color: white;
    }

    .summary p {
      margin: 6px 0;
      font-size: 16px;
    }

    .balance {
      font-size: 20px;
      font-weight: bold;
      margin-top: 10px;
    }

    ul {
      padding-left: 20px;
      margin-top: 10px;
    }
  `],
  template: `
    <div class="container">
      <h1>Finance Tracker</h1>

      <div class="card">
        <h3>Add Income</h3>
        <div class="input-group">
          <input type="number" [(ngModel)]="incomeAmount" placeholder="Enter income amount">
          <button class="income-btn" (click)="addIncome()">Add</button>
        </div>
      </div>

      <div class="card">
        <h3>Add Expense</h3>
        <div class="input-group">
          <input type="number" [(ngModel)]="expenseAmount" placeholder="Enter expense amount">
          <button class="expense-btn" (click)="addExpense()">Add</button>
        </div>
      </div>

      <div class="card summary">
        <h3>Summary</h3>
        <p>Total Income: ₹ {{ totalIncome }}</p>
        <p>Total Expenses: ₹ {{ totalExpenses }}</p>
        <p class="balance">Balance: ₹ {{ totalIncome - totalExpenses }}</p>
      </div>

      <div class="card">
        <h4>Income List</h4>
        <ul>
          <li *ngFor="let inc of incomes">₹ {{ inc }}</li>
        </ul>
      </div>

      <div class="card">
        <h4>Expense List</h4>
        <ul>
          <li *ngFor="let exp of expenses">₹ {{ exp }}</li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  incomeAmount = 0;
  expenseAmount = 0;
  incomes: number[] = [];
  expenses: number[] = [];
  totalIncome = 0;
  totalExpenses = 0;

  addIncome() {
    if (this.incomeAmount > 0) {
      this.incomes.push(this.incomeAmount);
      this.totalIncome += this.incomeAmount;
      this.incomeAmount = 0;
    }
  }

  addExpense() {
    if (this.expenseAmount > 0) {
      this.expenses.push(this.expenseAmount);
      this.totalExpenses += this.expenseAmount;
      this.expenseAmount = 0;
    }
  }
}