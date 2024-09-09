import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

function legacy() {
	const menu = document.querySelector(".comfy-menu");

	const clsButton = document.createElement("button");
	clsButton.textContent = "CLS";
	clsButton.addEventListener("click", () => api.fetchApi("/utils/cls"));

	const clearButton = document.getElementById("comfy-clear-button");
	menu.insertBefore(clsButton, clearButton);
}

async function frontend() {
	const btn = new (await import("../../scripts/ui/components/button.js")).ComfyButton({
		icon: "backspace-outline",
		action: () => {
			api.fetchApi("/utils/cls")
		},
		tooltip: "Clear Console",
		content: "CLS",
		classList: "comfyui-button comfyui-menu-mobile-collapse"
	}).element;

	app.menu?.actionsGroup.element.after(btn);
}

app.registerExtension({
	name: "Comfy.CLS",
	async setup() {

		try {
			await frontend();
		} catch {
			// No Frontend?
		}

		legacy();

	}
});
