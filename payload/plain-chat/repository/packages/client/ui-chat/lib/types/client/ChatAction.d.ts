import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { ChatKey } from './locales.ts';
export interface ChatActionInjected {
    startChat: () => void;
}
export type ChatActionProps = PropsRuntime<'sidebar.primary.action'> & PropsLocale<'chat'> & ChatActionInjected;
/**
 * Render the native Start chat action: as the right segment of the sidebar's
 * mode switch, or as a standalone capsule when mounted outside it.
 */
export declare function ChatAction({ wide, segment, active, startChat, t }: ChatActionProps): import("react").JSX.Element;
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        chat: ChatKey;
    }
}
//# sourceMappingURL=ChatAction.d.ts.map