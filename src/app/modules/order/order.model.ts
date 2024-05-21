import { Schema, model } from 'mongoose'
import { Order } from './order.interface.'

const OrderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

// !Export OrderModel

export const OrderModel = model<Order>('Order', OrderSchema)