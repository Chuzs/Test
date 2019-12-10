let resText = ''
const updateText = (state = {waitNum: 0}, action) => {
    switch (action.type) {
        case 'REQ':
            return Object.assign({}, state, {
                reqText: action.reqText
            })
        case 'RES':
            return Object.assign({}, state, {
                resText: appendRes(action.resText)
            })
        case 'WAIT':
            return Object.assign({}, state, {
                waitNum: action.waitNum
            })
        default:
            return state
    }
}

const appendRes = (value) => {
    return  resText = value === '' ? '' : resText + value
}

export default updateText;