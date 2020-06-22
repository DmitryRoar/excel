import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // Настраивает компонент до штше
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомляет слушаетелей про события
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписывается на события
  $on(event, cb) {
    const unsub = this.emitter.subscribe(event, cb)
    this.unsubscribers.push(unsub)
  }

  // инициализируем компонент
  init() {
    this.initDOMListeners()
  }

  // удалает компонент. Чистит слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
