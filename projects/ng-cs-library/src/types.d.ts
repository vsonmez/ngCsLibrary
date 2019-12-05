export type T_PanelThemes = "default" | "primary" | "secondary" | "success" | "danger" | "info" | "dark";
type NotificationTypes = "danger" | "info" | "success" | "default"
export interface I_Notification {
	text: string;
	type?: NotificationTypes;
}
