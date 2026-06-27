import { Container } from '../../components/common/Container';

// Dashboard Sub-components
import StatCards from './StatCards';
import Analytics from './Analytics';
import RecentOrders from './RecentOrders';

function Dashboard() {
  return (
    <div className="bg-background min-h-screen pt-10 pb-10">
      <Container>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Dashboard Overview</h1>
          {/* TODO: Dynamically fetch admin name for the welcome message */}
          <p className="text-neutral-500">Welcome back! Here's what's happening with your store.</p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <StatCards />
          <Analytics />
          <RecentOrders />
        </div>

      </Container>
    </div>
  );
}

export default Dashboard;