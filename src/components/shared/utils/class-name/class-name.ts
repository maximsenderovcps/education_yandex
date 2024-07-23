type Mods = Record<string, boolean | string>
export function clName(first: string, additional: string[] = [], mods: Mods = {}): string {
    return [
        first,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}