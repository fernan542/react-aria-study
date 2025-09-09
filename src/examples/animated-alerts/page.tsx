import { BreadcrumbHandleData } from "../../components/breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Animated Alerts",
    to: "/examples/animated-alerts",
  },
} satisfies BreadcrumbHandleData;

export const Page = () => {
  return <div>Animated Alerts</div>;
};

Page.handle = handle;
