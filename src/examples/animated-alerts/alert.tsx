import clsx from "clsx";
import { AlertData } from "./alert-data";
import { AlertType } from "./alert-type";
import { Close, Error, CheckCircle, Warning } from "@mui/icons-material";
import Info from "@mui/icons-material/Info";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  /**
   * @description Contains the configuration of an Alert that will be displayed.
   */
  alert: AlertData;

  /**
   * @description Optional callback method that will be called after the alert's duration.
   */
  onClose?: () => void;
}

const AlertTypeDecoration: Record<AlertType, string> = {
  [AlertType.error]: "bg-red-500 text-white",
  [AlertType.information]: "bg-blue-500 text-white",
  [AlertType.success]: "bg-green-500 text-white",
  [AlertType.warning]: "bg-orange-500 text-white",
};

const AlertTypeIcon: Record<AlertType, ReactNode> = {
  [AlertType.error]: <Error focusable={false} aria-hidden={true} />,
  [AlertType.information]: <Info focusable={false} aria-hidden={true} />,
  [AlertType.success]: <CheckCircle focusable={false} aria-hidden={true} />,
  [AlertType.warning]: <Warning focusable={false} aria-hidden={true} />,
};

export const AnimatedAlert = ({ alert, onClose }: Props) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [restartKey, setRestartKey] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 500);
    }, alert.duration);

    return () => {
      if (timerRef.current) {
        setRestartKey((prevKey) => prevKey + 1);
        clearInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert, visible]);

  useEffect(() => {
    setRestartKey((prevKey) => prevKey + 1);
  }, [visible]);

  const animDuration = `animate-[progress_${
    alert.duration! / 1000
  }s_ease-in-out]`;

  return (
    <div
      className={clsx(
        "w-[300px]", // recommended
        "flex flex-col",
        "rounded-md overflow-clip",
        visible ? "animate-slide-in" : "animate-slide-out",
        AlertTypeDecoration[alert.type]
      )}
    >
      <div className="flex flex-row items-center pl-4 pr-3 py-2">
        {AlertTypeIcon[alert.type]}
        <p className="pl-4 line-clamp-2 flex-grow">{alert.message}</p>
        <button className="ml-3" aria-label="Close alert" onClick={onClose}>
          <Close focusable={false} aria-hidden={true} />
        </button>
      </div>
      {visible && (
        <div
          key={restartKey}
          className={clsx("h-1 bg-slate-500", animDuration)}
        />
      )}
    </div>
  );
};
