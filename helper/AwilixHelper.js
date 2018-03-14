export function asArray(resolvers) {
    return (container, opts) => resolvers.map(r => container.build(r, opts))
}