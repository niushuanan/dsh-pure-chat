/** Package-owned invariant companion for native Chat. */
import type { Context } from '@deepseek-ai/cordis';
export declare const name = "client-ui-chat-invariant";
export declare const inject: string[];
/** Reserve package ownership for the lifetime of the composition. */
export declare const apply: (ctx: Context) => Promise<() => void>;
//# sourceMappingURL=invariant.d.ts.map