export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger - так же можно назвать
    // Уводемляем слушателей, если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach((listener) => {
            listener(...args)
        })
        return true
    }

    // on, listen
    // подписываемся на уведомления
    subscribe(event, cb) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(cb)
        return () => {
            this.listeners[event] = this.listeners[event]
                .filter(listener => listener !== cb)
        }
    }
}
