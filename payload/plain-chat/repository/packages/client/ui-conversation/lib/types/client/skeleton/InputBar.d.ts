/** The default composer body: the 'conversation.composer.bar' slot entry.
 * Machine state arrives through the standard provide channel
 * (useInput + inputActions); the keyboard/DOM command face and stop arrive
 * through this entry's own inject, whose hooks compartment binds
 * useNotices/useLexicon; layout-phase inputs (variant, placeholder,
 * region-slot content) ride the owner props. Session facts
 * (running/removed/promptError) are self-selected via useSession. */
import type { ComposerBarProps } from '../contract/slots.ts';
declare module '@deepseek-ai/dsh-session-projection/types' {
    interface SessionProjectionMap {
        teamwork: {
            active: boolean;
        };
    }
}
export type InputBarProps = ComposerBarProps;
export declare function InputBar({ useSession, useInput, inputActions, keyboard, addImages, removeImage, draftImages, resolveSubmitMode, toggleCommandMenu, toggleReferenceMenu, stop, command, t, renderSlot, useNotices, useLexicon, useCommandCatalog, useMenuLauncher, useProjection, sessionId, variant, disabled: inert, blocked, plainChat, workspacePickerOpen, onRequestWorkspace, placeholder, accessory, overlay, leftItems, rightItems, footer, }: InputBarProps): import("react").JSX.Element;
//# sourceMappingURL=InputBar.d.ts.map