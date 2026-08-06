import { api } from "../../scripts/api.js";
import { app } from "../../scripts/app.js";

async function frontend() {
	const btn = new (
		await import("../../scripts/ui/components/button.js")
	).ComfyButton({
		icon: "backspace-outline",
		action: () => {
			api.fetchApi("/utils/cls");
			console.clear();
		},
		tooltip: "Clear Console",
		content: "CLS",
		classList: "comfyui-button comfyui-menu-mobile-collapse",
	}).element;

	app.menu.actionsGroup.element.after(btn);
}

app.registerExtension({
	name: "Comfy.ClearScreen",
	async setup() {
		await frontend();
	},
});
