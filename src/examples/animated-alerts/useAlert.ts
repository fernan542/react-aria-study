import { useState } from "react";
import { AlertData } from "./alert-data";

const _defaultDuration = 5000; // In milliseconds

export function useAlert() {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const clearAlerts = () => setAlerts([]);

  const removeAlert = (message: string) => {
    setAlerts((prevAlerts) => prevAlerts.filter((e) => e.message !== message));
  };

  const addAlert = (alert: AlertData, duration: number = _defaultDuration) => {
    const _alerts = [...alerts];

    // To prevent dupes.
    const prevIndex = _alerts.findIndex((e) => e.message === alert.message);
    if (prevIndex !== -1) {
      const updatedAlert = {
        ..._alerts[prevIndex],
        duration,
      };

      _alerts[prevIndex] = updatedAlert;
    } else {
      _alerts.push({ ...alert, duration });
    }

    setAlerts(_alerts);
  };

  return { alerts, clearAlerts, removeAlert, addAlert };
}
