import BuyerProfilePieChart from "./BuyerProfileChart";
import DashboardStatsGrid from "./DashboardStatsGrid";
import PopularProducts from "./PopularProducts";
import RecentOrders from "./RecentOrders";
import TransactionChart from "./TransactionChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="w-full gap-4 flex flex-row">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="w-full gap-4 flex flex-row">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
};

export default Dashboard;
