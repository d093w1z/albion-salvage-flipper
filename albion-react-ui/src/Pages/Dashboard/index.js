import StatCard from "../../Components/StatCard";
import PriceChart from "../../Components/PriceChart";

function Dashboard() {
  return (
    <div
      style={{
        flex: "1 0 auto",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <StatCard dataCallback={() => ["total revenue", "2000"]} />
      <PriceChart />
    </div>
  );
}

export default Dashboard;
