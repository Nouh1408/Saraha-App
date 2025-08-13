import authRouter from './modules/auth/auth.controller.js'
import messageRouter from './modules/message/message.controller.js'
import userRouter from './modules/user/user.controller.js'
import { connectDB } from './DB/connection.js'

export function bootstrap(app,express){
    app.use(express.json())
    app.use('/auth', authRouter)
    app.use('/message', messageRouter)
    app.use('/user', userRouter)
    connectDB() //Buffering is enabled by default in Mongoose.
}