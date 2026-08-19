# Entity Relationship Diagram (ERD) Documentation

## 1. Entity Relationships Summary
- **User to Income**: 1-to-Many (`1 User` can log `N Income` entries)[cite: 2].
- **User to Expense**: 1-to-Many (`1 User` can log `N Expense` entries)[cite: 2].
- **User to Category**: 1-to-Many (`1 User` can create `N Custom Categories`)[cite: 2].
- **User to Budget**: 1-to-Many (`1 User` can set `N Monthly Budgets`)[cite: 2].
- **Category to Expense**: 1-to-Many (`1 Category` contains `N Expenses`)[cite: 2].
- **Category to Income**: 1-to-Many (`1 Category` contains `N Incomes`)[cite: 2].
- **Category to Budget**: 1-to-1 or 1-to-Many (`1 Category` has assigned `Budget Limits` per month)[cite: 2].

---

## 2. Foreign Key Reference Mapping
- `Incomes.user` ──► References `Users._id`[cite: 2]
- `Incomes.category` ──► References `Categories._id`[cite: 2]
- `Expenses.user` ──► References `Users._id`[cite: 2]
- `Expenses.category` ──► References `Categories._id`[cite: 2]
- `Budgets.user` ──► References `Users._id`[cite: 2]
- `Budgets.category` ──► References `Categories._id`[cite: 2]
- `Categories.user` ──► References `Users._id` (Optional/Null for global defaults)[cite: 2]

---

## 3. Visual ERD Diagram (Mermaid Format)

```mermaid
erDiagram
    USERS ||--o{ INCOMES : creates
    USERS ||--o{ EXPENSES : creates
    USERS ||--o{ CATEGORIES : defines
    USERS ||--o{ BUDGETS : configures
    CATEGORIES ||--o{ EXPENSES : classifies
    CATEGORIES ||--o{ INCOMES : classifies
    CATEGORIES ||--o{ BUDGETS : targets

    USERS {
        ObjectId _id PK
        string name
        string email
        string password
        string role
        date createdAt
    }

    CATEGORIES {
        ObjectId _id PK
        string name
        string type
        ObjectId user FK
        date createdAt
    }

    EXPENSES {
        ObjectId _id PK
        string title
        number amount
        ObjectId category FK
        ObjectId user FK
        date date
        string notes
    }

    INCOMES {
        ObjectId _id PK
        string title
        number amount
        ObjectId category FK
        ObjectId user FK
        date date
        string notes
    }

    BUDGETS {
        ObjectId _id PK
        ObjectId user FK
        ObjectId category FK
        number limitAmount
        number month
        number year
        date createdAt
    }
