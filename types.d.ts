import { CommandContext } from "discord-rose/dist/structures/CommandContext";

declare module 'discord-rose/dist/typings/lib' {
  export interface CommandOptions {
    /**
     * Whether or not to lock the command to admins only
     */
    admin?: boolean
  }
}

declare const _default: (idOrFunction: string | string[] | ((string) => boolean | Promise<boolean>)) => (ctx: CommandContext) => boolean

export default _default