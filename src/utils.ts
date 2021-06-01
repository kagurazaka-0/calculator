// inspired https://zenn.dev/suin/scraps/9f3cfc934e98fe#comment-a39a91c1d4a4e9

class InvalidStateError extends Error {
  constructor(value: never, message?: string) {
    const m = message ?? `Unexpected state: ${value}`
    super(m)
  }
}

export function throwInvalidStateError(value: never, message?: string): never {
  throw new InvalidStateError(value, message)
}
