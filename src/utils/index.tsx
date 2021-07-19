
export const byField = (field: string | number) => {
    debugger
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
}

export const getWeeksCount = (start: number, finish: number) => {
    return Math.round((finish - start) / (7 * 24 * 60 * 60 * 1000));
}

export const getCountByKey = (objects: any[], key: string | number, value: any)=> {
    return objects.reduce((count, obj) => obj[key] === value ? count + 1 : count, 0);
}
