import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

app.registerExtension({
	name: "Comfy.CLS",
	async setup() {
		const menu = document.querySelector(".comfy-menu");

		const clsButton = document.createElement("button");
		clsButton.textContent = "CLS";
		clsButton.addEventListener("click", () => api.fetchApi('/utils/cls'));

		const clearButton = document.getElementById("comfy-clear-button");
		menu.insertBefore(clsButton, clearButton);
	}
});
