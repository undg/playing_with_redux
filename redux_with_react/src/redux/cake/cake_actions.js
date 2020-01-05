import { BUY_CAKE, DELIVERY_CAKE } from './cake_types'

export const buy_cake = amount => ({
    type: BUY_CAKE,
    amount: amount
})

export const delivery_cake = amount => ({
    type: DELIVERY_CAKE,
    amount: amount
})
