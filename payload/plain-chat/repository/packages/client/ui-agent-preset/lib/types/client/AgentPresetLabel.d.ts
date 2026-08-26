/**
 * The session header's agent-preset switcher.
 *
 * The Host commits a pick only from an idle maintenance phase. A pick made
 * while the current turn runs stays queued in the plugin store, so the active
 * turn finishes under its original composition and the next turn uses the new
 * one.
 */
import type { SessionId, SnapshotStore } from '@deepseek-ai/dsh-client-runtime/client';
import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { AgentPresetSettingsState } from './settings-store.ts';
import type { AgentPresetSessionSwitchState } from './session-switch-store.ts';
/** Registration-side business face for the header label. */
export interface AgentPresetLabelInjected {
    hooks: {
        /** Roster snapshot bound by the renderer as useAgentPresets. */
        agentPresets: SnapshotStore<AgentPresetSettingsState>;
        /** Per-session pending and in-flight switch state. */
        agentPresetSwitch: SnapshotStore<AgentPresetSessionSwitchState>;
    };
    /** Read the roster, so the label can show a name rather than an id. */
    load: () => Promise<void>;
    /** Queue or apply one session's new preset. */
    switchPreset: (sessionId: SessionId, agentPreset: string) => Promise<void>;
}
/** Full component props. */
export type AgentPresetLabelProps = PropsRuntime<'conversation.session.header.actions'> & PropsLocale<'settings.agentPreset'> & InjectFace<AgentPresetLabelInjected>;
/**
 * Render this session's agent-preset name beside its title.
 * @param props - composed slot props.
 * @returns the label, or null when the session records no preset.
 */
export declare function AgentPresetLabel({ sessionId, useSessions, useAgentPresets, useAgentPresetSwitch, load, switchPreset, t, }: AgentPresetLabelProps): import("react").JSX.Element | null;
//# sourceMappingURL=AgentPresetLabel.d.ts.map