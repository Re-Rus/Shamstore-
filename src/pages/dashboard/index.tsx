import { Container } from '../../components/common/Container';
import LanguageToggle from './LanguageToggle';
import StatCards from './StatCards';
import Analytics from './Analytics';
import RecentOrders from './RecentOrders';
import { useTranslation } from 'react-i18next';
function Dashboard() {
   const { t } = useTranslation('dashboard');
  return (
    <div className="bg-background min-h-screen pt-10 pb-10">
      <Container>
        
        {/* Header */}
        <div className="mb-8">
          <LanguageToggle/>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">{t("Index.Dashboard Overview")}</h1>
          {/* TODO: Dynamically fetch admin name for the welcome message */}
          <p className="text-neutral-500">{t("Index.Welcome back! Here's what's happening with your store")}</p>
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