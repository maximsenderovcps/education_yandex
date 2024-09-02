export const printf = function (tpl: string, mapDict: Record<string, any>): string {
    let re = /\$\(([^\)]+)?\)/g, match;
    while (match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], mapDict[match[1]])
        re.lastIndex = 0;
    }

    return tpl;
};