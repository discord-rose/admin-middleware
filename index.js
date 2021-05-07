module.exports = (idOrFunction, message = 'You need to be admin to use this command.') => {
  const fn = typeof idOrFunction === 'string'
    ? (id) => idOrFunction === id
    : Array.isArray(idOrFunction)
      ? (id) => idOrFunction.includes(id)
      : idOrFunction

  return async (ctx) => {
    if (ctx.command.admin) {
      if (!await fn(ctx.message.author.id)) ctx.error(message)
      return false
    }

    return true
  }
}
