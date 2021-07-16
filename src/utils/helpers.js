
export const  byField = (field) => {
    debugger
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

