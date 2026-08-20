import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Card from './components/common/Card';
import Button from './components/common/Button';

export default function App() {
  return (
    <MainLayout>
      <Dashboard />
      <Card title="Quick Overview">
        <p>Your current financial workspace is ready for development.</p>
        <br />
        <Button onClick={() => alert('Sprint 5 Setup Operational!')}>Test Component</Button>
      </Card>
    </MainLayout>
  );
}