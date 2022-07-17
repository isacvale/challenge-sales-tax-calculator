import * as unitTests from './unitTests.js'
import * as functionalTests from './functionalTests.js'
import { clearItems, getBasket } from '../store.js'

const runButton = sectionTests.querySelector('button')

const testsOutput = sectionTests.querySelector('.tests-output')

const addMsg = (msg, success = true) => testsOutput
    .insertAdjacentHTML('beforeend',
    `<p class="output ${success ? 'success' : fail}">${msg}</p>`)

const runTests = () => {
    testsOutput.textContent = ""
    addMsg('unit tests')
    Object.entries(unitTests).forEach(([name, test]) => {
        clearItems()
        test()
            ? addMsg(`${name}: <em class="pass">pass ✓</em>`)
            : addMsg(`${name}: <em class="fail">fail ×</em>`)
        }
    )
    addMsg('----------------')
    addMsg('functional tests')
    Object.entries(functionalTests).forEach(([name, test]) => {
        clearItems()
        test()
            ? addMsg(`${name}: <em class="pass">pass ✓</em>`)
            : addMsg(`${name}: <em class="fail">fail ×</em>`)
        }
    )
}

export const hydration = () => {
    runButton.addEventListener('click', runTests)
}
