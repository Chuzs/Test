export const updateReqText = reqText => {
    return {
        type: 'REQ',
        reqText
    }
}
export const updateResText = resText => {
    return {
        type: 'RES',
        resText
    }
}
export const updateWaitNum = waitNum => {
    return {
        type: 'WAIT',
        waitNum
    }
}
export const updateStatusBtn = statusBtn => {
    return {
        type: 'STATUS',
        statusBtn
    }
}
export const updateTime = time => {
    return {
        type: 'TIME',
        time
    }
}

export const updateSetStatusBtn = setStatusBtn => {
    return {
        type: 'SET',
        setStatusBtn
    }
}

export const updateRestBtn = restBtn => {
    return {
        type: 'REST',
        restBtn
    }
}

export const updateLoginBtn = loginBtn => {
    return {
        type: 'LOGIN',
        loginBtn
    }
}

export const updateOtherworkBtn = otherworkBtn => {
    return {
        type: 'OTHER',
        otherworkBtn
    }
}

export const updateRestVisible = restVisible => {
    return {
        type: 'RESTVISIBLE',
        restVisible
    }
}

export const updateReKey = reKey => {
    return {
        type: 'REKEY',
        reKey
    }
}

export const updateSkillNameList = skillNameList => {
    return {
        type: 'SKILLNAMELIST',
        skillNameList
    }
}

export const updateSkillListVisible = skillListVisible => {
    return {
        type: 'SKILLLISTVISIBLE',
        skillListVisible
    }
}