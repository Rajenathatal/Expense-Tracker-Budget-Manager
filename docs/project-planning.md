# Expense Tracker & Budget Manager – Project Planning & Requirement Analysis

## 1. Project Title
Expense Tracker & Budget Manager

## 2. Problem Statement
Many individuals struggle with financial discipline due to manual or non-existent record-keeping. The people affected are individuals seeking to track their spending and manage personal finances. A centralized web application is needed to record income and expenses, organize financial transactions into categories, create monthly budgets, and monitor spending habits through a centralized dashboard.

## 3. Project Objective
To develop a web-based Personal Finance Management application that allows users to record daily income and expenses, manage categories, set monthly budget limits, track transaction history, and view automated financial summaries via interactive reports and dashboards.

## 4. Target Users / Stakeholders
### Administrator
- Manages users and user roles.
- Monitors system-wide categories and system reports.
- Manages application settings.

### Registered User
- Records and manages personal income and expense transactions.
- Sets up default and custom categories.
- Creates and monitors monthly budgets against actual spending.
- Views financial dashboard summaries, transaction history, and analytical reports.
- Updates profile details.

## 5. Core Modules
1. User Management
2. Authentication and Role-Based Authorization
3. Category Management
4. Expense Management
5. Income Management
6. Budget Management
7. Dashboard and Reports

## 6. Project Scope
### Included Features
- User registration and login with JWT-based authentication.
- Role-based authorization for Administrator and Registered User.
- User profile management.
- Create, view, update, and delete custom and default income/expense categories.
- Create, view, update, and delete expense records.
- Create, view, update, and delete income records.
- Create monthly budget allocations per category and track limits.
- Centralized Dashboard with income vs. expense analytics and budget progress indicators.
- Category-wise financial breakdowns and monthly reports.
- Responsive web interface.

### Excluded Features
- Live bank account integration.
- Online payment gateways.
- Investment management.
- Cryptocurrency tracking.
- Automated tax calculations.
- Dedicated mobile application.

## 7. Functional Requirements
### Authentication and Users
- The system shall allow new users to register and log in securely.
- The system shall authenticate users using JSON Web Tokens (JWT).
- The system shall restrict features based on user roles (Admin vs. Registered User).
- The system shall allow users to view and update their profile.

### Category & Income/Expense Management
- Users shall be able to create, edit, view, and delete income and expense categories.
- Users shall be able to log daily income and expense transactions with amounts, dates, and categories.
- The system shall maintain transaction history for both income and expenses.

### Budget Management
- Users shall be able to set monthly budget limits per category or overall spending.
- The system shall compare actual spending against allocated monthly budgets in real-time.

### Dashboard and Reports
- The system shall display financial summaries (Total Balance, Total Income, Total Expenses) on a dashboard.
- The system shall render monthly financial summaries and category-wise spending breakdowns.
- The system shall highlight budget progress metrics.

## 8. Non-Functional Requirements
### Security
- Passwords must be hashed using bcrypt before database storage.
- Protected API endpoints must require valid JWT authorization.
- Input validation and role checks must be strictly enforced.

### Performance
- Transaction logging and responsive dashboard updates must execute quickly.
- Database queries and aggregations must be optimized.

### Usability
- Interface must be responsive across desktop and mobile devices.
- Navigation, forms, and charts must be intuitive and modular.

### Reliability
- The system must handle invalid inputs gracefully without crashing and provide user-friendly error messages.

### Maintainability
- The backend must use modular routes, controllers, models, and middleware.
- The frontend must use reusable React components with clear structure.

### Scalability
- The design must allow future additions such as receipt uploads, savings goal tracking, dark mode, and PDF export functionality.

## 9. Expected Outcome
The Expense Tracker & Budget Manager will provide a centralized digital platform to help users build financial discipline, control spending, and track budget goals. It will provide hands-on experience in MERN stack development, MongoDB schema design, JWT authentication, and full-stack integration.