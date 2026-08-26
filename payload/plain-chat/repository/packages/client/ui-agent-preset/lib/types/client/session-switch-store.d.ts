/**
 * Session-header preset switching.
 *
 * A pick made during a running turn is retained per session and committed once
 * the shared session summary reports idle. The Host owns the matching idle
 * transaction, so navigating away cannot cancel a queued switch and a stale
 * client cannot recompose an active turn.
 */
import type { IApiClient } from '@deepseek-ai/dsh-api-remotes/client';
import { type SessionId, type SnapshotStore } from '@deepseek-ai/dsh-client-runtime/client';
/** Header switch state for one session. */
export interface AgentPresetSessionSwitchEntry {
    /** Preset accepted by the UI but not yet confirmed by the Host. */
    readonly pending?: string;
    /** Whether the Host call is in flight. */
    readonly busy: boolean;
    /** Last non-transient failure, cleared by the next pick. */
    readonly error: string | null;
}
/** Reactive state shared by every mounted session header. */
export interface AgentPresetSessionSwitchState {
    readonly bySession: Readonly<Record<string, AgentPresetSessionSwitchEntry>>;
}
/** Session facts needed to decide whether a switch can start. */
export interface SwitchableSessionSummary {
    readonly id: SessionId;
    readonly running: boolean;
    readonly agentPreset?: string;
}
/** Queue and commit per-session preset switches without interrupting turns. */
export declare class AgentPresetSessionSwitchController {
    private readonly api;
    private readonly session;
    private readonly onApplied;
    readonly store: SnapshotStore<AgentPresetSessionSwitchState>;
    constructor(api: Pick<IApiClient, 'agentPresets'>, session: (sessionId: SessionId) => SwitchableSessionSummary | undefined, onApplied: (sessionId: SessionId, agentPreset: string) => void);
    private entry;
    private set;
    private clear;
    /**
     * Accept a header-menu pick and commit it immediately when the session is idle.
     * A running session retains the pick until a later list update reports idle.
     * @param sessionId - session whose next turn uses the new preset.
     * @param agentPreset - selected preset id.
     * @returns after an immediate Host attempt settles, or immediately when queued.
     */
    select(sessionId: SessionId, agentPreset: string): Promise<void>;
    /** Retry every queued switch whose session may have become idle. */
    flushAll(): void;
    /** Fold a committed owner event into this browser's pending state. */
    confirm(sessionId: SessionId, agentPreset: string): void;
    private flush;
}
//# sourceMappingURL=session-switch-store.d.ts.map