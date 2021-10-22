import { serverHttp } from './app'

serverHttp.listen(process.env.PORT, () => console.log(`[${Date.now()}] 🚀 Running on port: ${process.env.PORT}`))
