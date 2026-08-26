//#region lib/types/invariant.js
const PACKAGE_NAME = "@deepseek-ai/dsh-client-ui-chat";
const name = "client-ui-chat-invariant";
const inject = ["invariants"];
const install = () => {};
/** Reserve package ownership for the lifetime of the composition. */
const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
//#endregion
export { apply, inject, name };
