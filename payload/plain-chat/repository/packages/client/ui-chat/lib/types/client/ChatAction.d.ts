import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { ChatKey } from './locales.ts';
export interface ChatActionInjected {
    startChat: () => void;
}
export type ChatActionProps = PropsRuntime<'sidebar.primary.action'> & PropsLocale<'chat'> & ChatActionInjected;
/** Render the native Start chat action in wide and rail sidebar postures. */
export declare function ChatAction({ wide, startChat, t }: ChatActionProps): import("react").JSX.Element;
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        chat: ChatKey;
    }
}
//# sourceMappingURL=ChatAction.d.ts.map