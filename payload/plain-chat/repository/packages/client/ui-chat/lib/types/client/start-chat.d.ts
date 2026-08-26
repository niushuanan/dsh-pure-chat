import type { ISessions } from '@deepseek-ai/dsh-client-runtime/client';
/** Durable internal preset that identifies a plain Chat Session. */
export declare const CHAT_AGENT_PRESET = "chat";
type ChatSessions = {
    readonly list: Pick<ISessions['list'], 'getSnapshot'>;
    readonly create: ISessions['create'];
    readonly open: ISessions['open'];
    readonly openWhenReady: ISessions['openWhenReady'];
};
/**
 * Gesture-level Chat Session orchestration. A blank chat is reusable state,
 * while one in-flight create owns every click until it settles.
 */
export declare class ChatStarter {
    private readonly sessions;
    private creating;
    constructor(sessions: ChatSessions);
    /** Open an existing blank chat or create and open exactly one new chat. */
    start(): void;
}
export {};
//# sourceMappingURL=start-chat.d.ts.map