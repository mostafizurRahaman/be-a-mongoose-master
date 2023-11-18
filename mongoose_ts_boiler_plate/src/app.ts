import express, { Application, Request, Response } from 'express'
import cors from 'cors'

// create application :
const app: Application = express()

// parsers :
app.use(express.json())
app.use(cors())

// main route:
app.get('/', (req: Request, res: Response) => {
  const a = 20

  console.log(a)
  console.log(a)

  res.send('Yah!!! our server is running now.......')
})

// export :

export default app
