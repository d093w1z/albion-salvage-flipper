import { Card, Layout, Statistic } from "antd";

function StatCard({
  style = {},
  dataCallback = () => {
    return [null, null];
  },
  dataTestId,
}) {
  let [ label, value ] = dataCallback();
  console.log(dataCallback());
  return (
    <div className="stat-card" data-testid={dataTestId} style={{padding:20}}>
      <Layout>
        <Card>
          {label}
          <Statistic value={value} style={style} />
        </Card>
      </Layout>
    </div>
  );
}

export default StatCard;
