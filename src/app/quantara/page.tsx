import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import QuantaraLayout from "@/components/QuantaraLayout";

export const metadata: Metadata = {
  title: "Quantara",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  icons: {
    icon: "../../public/images/logo/fav.png",
  },
};

const Test = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Quantara" />
        <QuantaraLayout />
      </div>
    </DefaultLayout>
  );
};

export default Test;
