import { useState } from 'react';
import Button from './Button';

export default function ExpenseForm({ onAddExpense }) {
  // Controlled Component State (Exercise 2)
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food & Dining',
    date: ''
  });

  // Client-Side Validation State (Exercise 4 & 5)
  const [errors, setErrors] = useState({});

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Client-Side Validation Rules (Exercise 4)
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Expense title is required.';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long.';
    }

    if (!formData.amount) {
      newErrors.amount = 'Amount is required.';
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number.';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission Handler (Exercise 3)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default browser refresh

    if (validateForm()) {
      const newTransaction = {
        id: Date.now(),
        ...formData,
        amount: parseFloat(formData.amount)
      };

      if (onAddExpense) {
        onAddExpense(newTransaction);
      }

      // Reset Form Data (Exercise 6)
      handleReset();
    }
  };

  // Reset Handler (Exercise 6)
  const handleReset = () => {
    setFormData({ title: '', amount: '', category: 'Food & Dining', date: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Add New Expense</h3>

      {/* Title Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
          Expense Title <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Grocery Shopping"
          style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: errors.title ? '1px solid #ef4444' : '1px solid #cbd5e1' }}
        />
        {errors.title && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.title}</span>}
      </div>

      {/* Amount & Category Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
            Amount ($) <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: errors.amount ? '1px solid #ef4444' : '1px solid #cbd5e1' }}
          />
          {errors.amount && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.amount}</span>}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          >
            <option value="Food & Dining">Food & Dining</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
      </div>

      {/* Date Input */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
          Date <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: errors.date ? '1px solid #ef4444' : '1px solid #cbd5e1' }}
        />
        {errors.date && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.date}</span>}
      </div>

      {/* Form Action Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Button type="submit">Add Expense</Button>
        <Button type="button" variant="secondary" onClick={handleReset}>Reset</Button>
      </div>
    </form>
  );
}