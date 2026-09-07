import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function Home() {
  return (
    <div>
      <PageTitle 
        title="Welcome to Expense Tracker" 
        description="Take control of your personal finances and manage your daily budget effortlessly." 
      />
      
      <Card title="Quick Overview" description="Monitor expenses in real time">
        <p style={{ marginBottom: '1rem' }}>
          Organize transactions, set monthly savings goals, and view detailed financial reports.
        </p>
        <Button onClick={() => alert('Navigating to Dashboard...')}>
          Go to Dashboard
        </Button>
      </Card>
    </div>
  );
}