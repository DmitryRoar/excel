import {Router} from './Router'
import {Page} from '../page/Page'

class DashboardPage extends Page {
    getRoot() {
        const root = document.createElement('div')
        root.innerHTML = `<h1>dashboard</h1>`
        return root
    }
}
class ExcelPage extends Page {}

describe('Router', () => {
    let router
    let $root
    beforeEach(() => {
        $root = document.createElement('div')
        router = new Router($root,{
            dashboard: DashboardPage,
            excel: ExcelPage
        })
    })

    test('should be defined', () => {
        expect(router).toBeDefined()
    })

    test('should render dashboard page', () => {
        router.changePageHandler()
        expect($root.innerHTML).toBe(`<div><h1>dashboard</h1></div>`)
    })
})
