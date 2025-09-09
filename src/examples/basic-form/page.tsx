import clsx from "clsx";
import { BreadcrumbHandleData } from "../../components/breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Basic Form",
    to: "/examples/basic-form",
  },
} satisfies BreadcrumbHandleData;

export const Page = () => {
  return (
    <>
      <p>Fields marked with an asterisk (*) are required.</p>

      <form className={clsx("w-[300px] p-5", "bg-[#eee] rounded-md shadow-md")}>
        <div className="clear-both">
          <label
            htmlFor="name"
            className="w-[130px] p-1 mb-5 float-left text-left text-[1em]"
          >
            Enter your name*:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" w-[130px] float-right border border-black outline-1 text-[1em]"
          />
        </div>
        <div className="clear-both">
          <label
            htmlFor="age"
            className="w-[130px] p-1 mb-5 float-left text-left text-[1em]"
          >
            Enter your age*:
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className=" w-[130px] float-right border border-black outline-1 text-[1em]"
          />
        </div>
        <div>
          <input
            type="submit"
            className={clsx(
              "p-2 m-1 inline-block relative",
              "border-[1px] rounded-md",
              "shadow-sm shadow-gray-400",
              "aria-disabled:bg-gray-200"
            )}
          />
        </div>
      </form>
    </>
  );
};

Page.handle = handle;
