import {TStatus} from "./models";

export const StatusDictionary: Record<TStatus, string> = {
    done: 'Выполнен',
    created: 'Создан',
    pending: 'Готовится',
    cancelled: 'Отменен'
}