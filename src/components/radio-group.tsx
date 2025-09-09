import { BreadcrumbHandleData } from "./breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Radio Group",
    to: "/components/radio-group",
  },
} satisfies BreadcrumbHandleData;

export const RadioGroup = () => {
  return <h1>RadioGroup</h1>;
};

RadioGroup.handle = handle;
