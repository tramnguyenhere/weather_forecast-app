import format from 'date-fns/format'

export const fullDateConverter = (value: number | Date) => {
    const convertedTime = format(value, 'do MMM yy')
    return convertedTime
}
export const dateToFetchDataConverter = (value: number | Date) => {
    const convertedTime = format(value, 'yyyy-MM-dd')
    return convertedTime
}

export const dayOfWeekConverter = (value: number | Date) => {
    const convertedTime = format(value, 'eeee')
    return convertedTime
}

export const timeConverter = (time: number | Date) => {
    const convertedTime = format(time, 'p')
    return convertedTime
}