## 3. `docs/design/wireframes.md`

This file provides textual ASCII wireframes for the required minimum 5 primary application screens[cite: 4].

```markdown
# Application UI Wireframes Documentation

## Screen 1: Login / Registration Page
```plaintext
+-------------------------------------------------------------+
|               Expense Tracker & Budget Manager              |
+-------------------------------------------------------------+
|                                                             |
|                       [ LOGIN / REGISTER ]                  |
|                                                             |
|   Email Address:  [ user@example.com                   ]    |
|   Password:       [ ********************               ]    |
|                                                             |
|   [ Login Button ]      or    [ Switch to Register ]        |
|                                                             |
+-------------------------------------------------------------+
## Main Dashboard Page
+-------------------------------------------------------------+
| [Logo] ExpenseTracker   Dashboard  Incomes  Expenses  Logout|
+-------------------------------------------------------------+
| FINANCIAL OVERVIEW                                          |
| +------------------+ +------------------+ +---------------+ |
| | Total Balance    | | Total Income     | | Total Expense | |
| | $3,450.00        | | $5,000.00        | | $1,550.00     | |
| +------------------+ +------------------+ +---------------+ |
|                                                             |
| CATEGORY SPENDING (Pie Chart)     RECENT TRANSACTIONS       |
| [  Chart Visual Here  ]           - Groceries:  -$120.00    |
|                                   - Salary:    +$2,500.00   |
|                                   - Electric:   -$85.00     |
+-------------------------------------------------------------+

##Transactions Page (Income & Expense CRUD)
+-------------------------------------------------------------+
| Transactions List                     [ + Add Transaction ] |
+-------------------------------------------------------------+
| Search: [               ]   Filter Category: [ All Categories v ]
|                                                             |
| Date       | Title         | Category    | Type    | Amount |
|------------|---------------+-------------|---------|--------|
| 2026-08-10 | Salary        | Job         | Income  | $2,500 |
| 2026-08-11 | Supermarket   | Groceries   | Expense | $120   |
| 2026-08-12 | Internet Bill | Utilities   | Expense | $60    |
|                                                             |
| Actions: [ Edit ] [ Delete ]                                |
+-------------------------------------------------------------+

##Budget Management Page
+-------------------------------------------------------------+
| Monthly Budget Limits (August 2026)      [ + Set Budget ]   |
+-------------------------------------------------------------+
|                                                             |
| Groceries                                                   |
| Spent: $350 / Limit: $500                                   |
| [====================--------] 70% used                     |
|                                                             |
| Entertainment                                               |
| Spent: $180 / Limit: $150 (OVER BUDGET!)                    |
| [============================!] 120% used                    |
|                                                             |
+-------------------------------------------------------------+

##Analytics & Reports Page
+-------------------------------------------------------------+
| Financial Analytics Reports                                 |
+-------------------------------------------------------------+
| Select Month: [ August 2026 v ]    Export: [ PDF ] [ Excel ]|
|                                                             |
| MONTHLY INCOME VS EXPENSES (Bar Chart Visual)               |
| |                                                           |
| |  [Income]  [Expense]   [Income]  [Expense]                |
| |____|__|______|__|________|__|______|__|_________________  |
|      July 2026               August 2026                    |
|                                                             |
| Total Savings this Month: $1,450.00                         |
+-------------------------------------------------------------+
