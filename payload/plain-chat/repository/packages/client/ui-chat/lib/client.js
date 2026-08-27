window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-chat",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0dsh-css:/Users/zhuanghongkai/Desktop/迭代DSH/xiaozhuang-dsh/packages/client/ui-chat/src/client/ChatAction.module.css.mjs
		const css = ".MztKGW_action{box-sizing:border-box;background:var(--dsw-alias-button-primary-fill);height:38px;color:var(--dsw-alias-label-primary-foreground);cursor:pointer;border:1px solid #0000;border-radius:12px;flex:none;justify-content:center;align-items:center;gap:6px;margin:0 2px 8px;padding:8px 16px;font-size:14px;font-weight:500;line-height:22px;display:flex;overflow:hidden}.MztKGW_action:hover{background:var(--dsw-alias-button-primary-hover)}.MztKGW_rail{background:0 0;border-color:#0000;align-self:flex-start;gap:0;width:36px;height:36px;margin:0 0 12px;padding:0}.MztKGW_rail:hover{background:var(--dsw-alias-interactive-bg-hover)}.MztKGW_label{white-space:nowrap;max-width:200px;overflow:hidden}.MztKGW_segment{z-index:1;min-width:0;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border:0;flex:50%;justify-content:center;align-items:center;gap:6px;padding:0;font-size:12px;font-weight:500;line-height:20px;transition:color .22s ease-in-out;display:flex;position:relative;overflow:hidden}.MztKGW_segment:hover{background:color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent)}.MztKGW_segment[aria-pressed=true]{color:var(--dsw-alias-label-primary-foreground);font-weight:600}.MztKGW_segment[aria-pressed=true]:hover{background:0 0}.MztKGW_segmentLabel{white-space:nowrap;max-width:200px;overflow:hidden}";
		const tagId = "@deepseek-ai/dsh-client-ui-chat/ChatAction.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-chat";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var ChatAction_module_css_default = {
			"action": "MztKGW_action",
			"label": "MztKGW_label",
			"rail": "MztKGW_rail",
			"segment": "MztKGW_segment",
			"segmentLabel": "MztKGW_segmentLabel"
		};
		//#endregion
		//#region src/client/ChatAction.tsx
		/**
		* Render the native Start chat action: as the right segment of the sidebar's
		* mode switch, or as a standalone capsule when mounted outside it.
		*/
		function ChatAction({ wide, segment, active, startChat, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: t("start.label"),
				delayMs: 500,
				disabled: wide,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: segment ? ChatAction_module_css_default.segment : `${ChatAction_module_css_default.action}${wide ? "" : ` ${ChatAction_module_css_default.rail}`}`,
					"aria-label": t("start.label"),
					"aria-pressed": segment ? active === true : void 0,
					onClick: startChat,
					children: [!wide && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChatOutline16, { size: 18 }), wide && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: segment ? ChatAction_module_css_default.segmentLabel : ChatAction_module_css_default.label,
						children: t("start")
					})]
				})
			});
		}
		//#endregion
		//#region src/client/locales.ts
		const zh = {
			start: "开始聊天",
			"start.label": "开始聊天"
		};
		const en = {
			start: "Start chat",
			"start.label": "Start chat"
		};
		//#endregion
		//#region src/client/start-chat.ts
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
		//#region src/client/index.ts
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