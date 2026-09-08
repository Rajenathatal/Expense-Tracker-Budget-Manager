import { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import WelcomeBanner from '../../components/ui/WelcomeBanner';

export default function Dashboard() {
  // 1. State for Dynamic User Greeting (Exercise 1 & 5)
  const [userName, setUserName] = useState('John Doe');

  // 2. State for Notification/Quick Tracker Counter (Exercise 3 & 4)
  const [transactionCount, setTransactionCount] = useState(0);

  // 3. State for Conditional Rendering (Exercise 6)
  const [showSummary, setShowSummary] = useState(true);

  return (
    <div>
      <PageTitle 
        title="Dashboard Overview" 
        description="View your active monthly budgets and recent financial updates." 
      />

      {/* Dynamic Props via WelcomeBanner (Exercise 1) */}
      <WelcomeBanner username={userName} projectName="Expense Tracker & Budget Manager" />

      {/* Exercise 5: Live Input Event Handling */}
      <Card title="Profile Preferences" description="Update your display name dynamically">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '300px' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Update Profile Name:</label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Type a new name..."
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>
      </Card>

      {/* Exercise 3 & 4: Button Click Event Handling with State */}
      <div className="grid-layout" style={{ marginTop: '1.5rem' }}>
        <Card title="Quick Transaction Log" description="Interactively update your entry counter">
          <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0', color: '#2563eb' }}>
            Logged Transactions: {transactionCount}
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button onClick={() => setTransactionCount(transactionCount + 1)}>
              + Add Quick Entry
            </Button>
            <Button variant="secondary" onClick={() => setTransactionCount(0)}>
              Reset
            </Button>
          </div>
        </Card>

        {/* Exercise 6: Conditional Rendering */}
        <Card title="Monthly Summary Status" description="Toggle visibility using State">
          <Button 
            variant={showSummary ? "secondary" : "primary"} 
            onClick={() => setShowSummary(!showSummary)}
          >
            {showSummary ? "Hide Summary Details" : "Show Summary Details"}
          </Button>

          {showSummary ? (
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#f1f5f9', borderRadius: '6px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Budget Limit:</strong> $5,000.00</p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}><strong>Current Spend:</strong> $1,550.00</p>
            </div>
          ) : (
            <p style={{ marginTop: '1rem', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.875rem' }}>
              Summary hidden. Click the button above to reveal details.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}