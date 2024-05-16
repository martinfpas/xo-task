export const toNumber = (param: string | undefined) => {
    if (param) {
        return parseInt(param);
    }
    return 0;
}