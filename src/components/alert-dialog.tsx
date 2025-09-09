import { BreadcrumbHandleData } from "./breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Alert Dialog",
    to: "/components/alert-dialog",
  },
} satisfies BreadcrumbHandleData;

export const AlertDialog = () => {
  return <h1>Alert Dialog Ex View</h1>;
};

AlertDialog.handle = handle;
