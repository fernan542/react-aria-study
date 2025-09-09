/**
 * @description The type of the alert to be displayed.
 * @summary This can be used for customization such as background colors, icons, etc.
 */
enum AlertType {
  success,
  error,
  information,
  warning,
}

/**
 * @description This represents a single data or configuration for an alert.
 * @summary This also serves as the state of a single alert.
 */
interface AlertData {
  /**
   * @description The unique identifier of a alert.
   */
  id: string;

  /**
   * @description The message to be desplayed at alert component.
   */
  message: string;

  /**
   * @see AlertType
   */
  type: AlertType;

  /**
   * @description An optional duration of a single toast's visibility.
   */
  duration?: number;

  /**
   * @description An optional icon to display in the alert. Defaults to success icon if `null`.
   */
  leading?: React.ReactNode;
}

interface Props {
  /**
   * @description Contains the configuration of an Alert that will be displayed.
   */
  alert: AlertData;

  /**
   * @description Flag for setting Alert's center position. Defaults to `false`.
   */
  center?: boolean;

  /**
   * @description Optional callback method that will be called after the alert's duration.
   */
  onClose?: () => void;
}

export const AnimatedAlert = ({ alert, center = false, onClose }: Props) => {
  console.log(alert);
  console.log(center);
  console.log(onClose);
  return <div></div>;
};
