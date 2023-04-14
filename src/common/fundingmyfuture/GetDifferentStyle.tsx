import Style from './FundingMyFutureStyle'

export const getStyle = (index: number) => {
    if (index === 0) return { ...Style.evenBorrow, ...Style.removeBottomLine, ...Style.removeEvenSpace }
    else if (index === 2 || index === 3) {
        return { ...Style.evenBorrow, ...Style.removeBottomLine }
    }
    else if (index === 5) return Style.oddBorrow
    else if (index === 5) return Style.oddBorrow
    else return { ...Style.oddBorrow, ...Style.removeBottomLine }
}

export const getAcademicStyle = (index: number) => {
    if (index === 5) return { ...Style.oddBorrow, ...Style.addBorrowBackColor }
    // else if(index === 6) return Style.myFutureFooter
    else return { ...Style.oddBorrow, ...Style.removeBottomLine, ...Style.addBorrowBackColor }
}

export const getProgramCost = (index: number) => {
    if (index === 5) return Style.oddBorrow
    else return { ...Style.programCost, ...Style.removeBottomLine }
}

export const getFirstStyle = (index: number) => {
    if (index === 3) {
        return { ...Style.rightBorder, ...Style.firstvalCel, ...Style.removeBottomLine }
    }
    else if (index === 11) return { ...Style.myFutureFooter }
    else if (index === 6 || index === 7 || index === 8)
        return { ...Style.rightBorder, ...Style.firstvalCel, ...Style.myFutureSubFile }
    else return { ...Style.rightBorder, ...Style.firstvalCel }
}

export const getSecondStyle = (index: number) => {
    if (index === 3) {
        return Style.estimatedHighlight
    }
    else if (index === 11) {
        return { ...Style.myFutureFooter }
    }
    else if (index === 6 || index === 7 || index === 8){
        return { ...Style.rightBorder, ...Style.secondvalCel,...Style.myFutureSubFile }
    }
    else if (index === 1 || index === 9) return Style.estimatedFont
    else return { ...Style.rightBorder, ...Style.secondvalCel }
}

export const getThirdStyle = (index: number) => {
    if (index === 3) {
        return Style.pellgrantCost
    }
    else if (index === 1 || index === 9) return Style.pellgrantFont
    else if (index === 6 || index === 7 || index === 8){
        return { ...Style.pellgrantCostOther,...Style.myFutureSubFile }
    }
    else return { ...Style.pellgrantCostOther }
}