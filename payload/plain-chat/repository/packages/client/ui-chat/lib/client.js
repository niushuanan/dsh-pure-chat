window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-chat",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region \0dsh-css:dsh-source/packages/client/ui-chat/src/client/ChatAction.module.css.mjs
		const css = ".bX_zYq_action{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-button-elevated-fill);height:38px;color:var(--dsw-alias-label-primary);cursor:pointer;border-radius:12px;flex:none;justify-content:center;align-items:center;gap:6px;margin:0 2px 8px;padding:8px 16px;font-size:14px;font-weight:500;line-height:22px;display:flex;overflow:hidden}.bX_zYq_action:hover{background:var(--dsw-alias-button-floating-hover)}.bX_zYq_rail{background:0 0;border-color:#0000;align-self:flex-start;gap:0;width:36px;height:36px;margin:0 0 12px;padding:0}.bX_zYq_rail:hover{background:var(--dsw-alias-interactive-bg-hover)}.bX_zYq_label{white-space:nowrap;max-width:200px;overflow:hidden}";
		const tagId = "@deepseek-ai/dsh-client-ui-chat/ChatAction.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-chat";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var ChatAction_module_css_default = {
			"action": "bX_zYq_action",
			"label": "bX_zYq_label",
			"rail": "bX_zYq_rail"
		};
		//#endregion
		//#region lib/types/client/ChatAction.js
		/** Render the native Start chat action in wide and rail sidebar postures. */
		function ChatAction({ wide, startChat, t }) {
			return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: t("start.label"),
				delayMs: 500,
				disabled: wide,
				children: (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `${ChatAction_module_css_default.action}${wide ? "" : ` ${ChatAction_module_css_default.rail}`}`,
					"aria-label": t("start.label"),
					onClick: startChat,
					children: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChatOutline16, { size: wide ? 14 : 18 }), wide && (0, react_jsx_runtime.jsx)("span", {
						className: ChatAction_module_css_default.label,
						children: t("start")
					})]
				})
			});
		}
		//#endregion
		//#region lib/types/client/locales.js
		const zh = {
			start: "开始聊天",
			"start.label": "开始聊天"
		};
		const en = {
			start: "Start chat",
			"start.label": "Start chat"
		};
		//#endregion
		//#region lib/types/client/start-chat.js
		/** Durable internal preset that identifies a plain Chat Session. */
		const CHAT_AGENT_PRESET = "chat";
		/**
		* Gesture-level Chat Session orchestration. A blank chat is reusable state,
		* while one in-flight create owns every click until it settles.
		*/
		var ChatStarter = class {
			sessions;
			creating;
			constructor(sessions) {
				this.sessions = sessions;
			}
			/** Open an existing blank chat or create and open exactly one new chat. */
			start() {
				const list = this.sessions.list.getSnapshot();
				const reusable = list.ids.find((id) => {
					const row = list.byId[id];
					return row?.blank === true && row.agentPreset === "chat";
				});
				if (reusable !== void 0) {
					this.sessions.open(reusable);
					return;
				}
				const pending = this.creating ?? this.sessions.create({ agentPreset: "chat" });
				if (this.creating === void 0) {
					this.creating = pending;
					pending.finally(() => {
						if (this.creating === pending) this.creating = void 0;
					}).catch(() => void 0);
				}
				this.sessions.openWhenReady(pending, (reason) => {
					console.warn("start chat failed:", reason);
				});
			}
		};
		//#endregion
		//#region lib/types/client/index.js
		const inject = [
			"slots",
			"sessions",
			"locale"
		];
		/** Mount the Start chat sidebar contribution. */
		function apply(ctx) {
			const starter = new ChatStarter(ctx.sessions);
			ctx.effect(() => ctx.locale.register("chat", {
				zh,
				en
			}), "ui-chat: dictionaries");
			ctx.slots.inject("sidebar.primary.action", () => ctx.slots.register({
				name: "sidebar.primary.action",
				id: "chat",
				order: 10,
				locale: "chat",
				inject: () => ({ startChat: () => {
					starter.start();
				} })
			}, ChatAction));
		}
		//#endregion
		exports.CHAT_AGENT_PRESET = CHAT_AGENT_PRESET;
		exports.ChatStarter = ChatStarter;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map