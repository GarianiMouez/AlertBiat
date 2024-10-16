import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Line from "@/components/LineChart/LineChart";

const QuantaraLayout = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Dashboard" pageTitle="Quantara" />
      <Line title="Quantara Alert" />
    </div>
  );
};

export default QuantaraLayout;
