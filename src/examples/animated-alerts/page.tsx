import { BreadcrumbHandleData } from "../../components/breadcrumbs/useBreadcrumbs";
import { AlertData } from "./alert-data";
import { AlertType } from "./alert-type";
import { AnimatedAlert } from "./alert";
import { useAlert } from "./useAlert";

const handle = {
  breadcrumb: {
    label: "Animated Alerts",
    to: "/examples/animated-alerts",
  },
} satisfies BreadcrumbHandleData;

export const Page = () => {
  const { alerts, addAlert, removeAlert } = useAlert();

  return (
    <main>
      <div className="flex flex-col w-[200px] gap-2">
        <button
          onClick={() => {
            const now = Date.now();
            const alert: AlertData = {
              message: `This is an information alert with long message for testing. ${now}`,
              type: AlertType.information,
            };
            addAlert(alert);
          }}
          className="bg-blue-500 p-2 rounded-lg text-white"
        >
          Show Info
        </button>
        <button
          onClick={() => {
            const alert: AlertData = {
              message: "This is a warning alert.",
              type: AlertType.warning,
            };
            addAlert(alert);
          }}
          className="bg-orange-500 p-2 rounded-lg text-white"
        >
          Show Warning
        </button>
        <button
          onClick={() => {
            const alert: AlertData = {
              message: "This is a success alert.",
              type: AlertType.success,
            };
            addAlert(alert);
          }}
          className="bg-green-500 p-2 rounded-lg text-white"
        >
          Show Success
        </button>
        <button
          onClick={() => {
            const alert: AlertData = {
              message: "This is an error alert.",
              type: AlertType.error,
            };
            addAlert(alert);
          }}
          className="bg-red-500 p-2 rounded-lg text-white"
        >
          Show Error
        </button>
      </div>
      <section
        role="alert"
        className="absolute top-0 right-0 h-lvh p-4 space-y-2 overflow-clip"
      >
        {alerts &&
          alerts.map((e) => {
            return (
              <AnimatedAlert
                key={e.message}
                alert={e}
                onClose={() => {
                  removeAlert(e.message);
                }}
              />
            );
          })}
      </section>
    </main>
  );
};

Page.handle = handle;
