import { Playground } from './components/playground.mjs'
import ready from './utils/ready.mjs'


ready(() => {
    const canvas = document.querySelector('canvas')
    new Playground(canvas)
})