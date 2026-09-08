import { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import ExpenseForm from '../../components/ui/ExpenseForm';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Weekly Groceries', amount: 85.5, category: 'Food & Dining', date: '2026-09-01' },
    { id: 2, title: 'Electricity Bill', amount: 120.0, category: 'Utilities', date: '2026-09-05' }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <PageTitle 
        title="Dashboard Overview" 
        description="Manage your daily expenses, track budgets, and input transactions." 
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Left Column: Sprint 10 Controlled Expense Form */}
        <div>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        {/* Right Column: Dynamic Expense List */}
        <div>
          <Card title="Total Spent" description="Updated live from transactions">
            <h2 style={{ color: '#dc2626', margin: '0.5rem 0 1rem 0' }}>${totalSpent.toFixed(2)}</h2>
          </Card>

          <Card title="Recent Transactions" description="List of submitted expenses">
            {expenses.length === 0 ? (
              <p style={{ color: '#64748b' }}>No expenses logged yet.</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {expenses.map((exp) => (
                  <li key={exp.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', padding: '0.5rem 0' }}>
                    <div>
                      <strong>{exp.title}</strong>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>{exp.category} • {exp.date}</span>
                    </div>
                    <span style={{ fontWeight: 'bold', color: '#0f172a' }}>-${exp.amount.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}