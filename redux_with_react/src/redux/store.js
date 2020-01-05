import { createStore } from 'redux'
import cake_reducer from './cake/cake_reducer'


const store = createStore(cake_reducer)

export default  store
