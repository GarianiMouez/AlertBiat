import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Quantara",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  icons: {
    icon: "../../public/images/logo/fav.png",
  },
};

const QuantaraComponent = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Composants" pageTitle="Quantara" />
    </DefaultLayout>
  );
};

export default QuantaraComponent;
