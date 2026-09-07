import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function Dashboard() {
  return (
    <div>
      <PageTitle 
        title="Dashboard Overview" 
        description="View your active monthly budgets and recent financial updates." 
      />

      <Card title="Monthly Balance" description="Updated today">
        <h2 style={{ color: '#16a34a', margin: '0.5rem 0' }}>$3,450.00</h2>
        <Button variant="secondary">View Breakdown</Button>
      </Card>

      <Card title="Recent Expense" description="Category: Food & Dining">
        <p style={{ margin: '0.5rem 0' }}>Amount: $45.20</p>
        <Button>Add New Transaction</Button>
      </Card>
    </div>
  );
}