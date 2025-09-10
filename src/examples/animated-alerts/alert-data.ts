import { AlertType } from "./alert-type";

/**
 * @description This represents a single data or configuration for an alert.
 * @summary This also serves as the state of a single alert.
 */
export interface AlertData {
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
