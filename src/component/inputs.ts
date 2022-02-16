const inputEle = (id: 'prev' | 'next' | 'result') => {
    if( id !== 'result') {
        return `<input type="number" id="${id}">`;
    }
    return `<span id="${id}"></span>`
}


export {
    inputEle
}