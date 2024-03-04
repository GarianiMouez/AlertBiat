import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import T24Layout from "@/components/T24Cards";

export const metadata: Metadata = {
  title: "T24",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Test = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="T24" />
        <T24Layout />
      </div>
    </DefaultLayout>
  );
};

export default Test;
