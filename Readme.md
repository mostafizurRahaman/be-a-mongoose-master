# Express JS :

## What is express js?

-  🎗️ Express js is a Fast, unopinionated and minimalist web framework for Node
   JS
-  🎗️ Express js is a Fast, unopinionated and minimalist web framework for Node
   JS

## Install Express JS :

-  ```js
    npm i express
   ```
-  ```js
    yarn add express
   ```

## Install TypeScript as Dev Dependencies:

-  🎗️ npm

```ts
   npm i  -D typescript
```

-  🎗️ yarn

```ts
   yarn add -D typescript
```

-  ### Install `@types/express` for `express`:

   -  🤷‍♂️ yarn:

   ```ts
      yarn add -D @types/express
   ```

   -  🤷‍♂️ npm:

   ```ts
      npm i -D @types/express
   ```

-  ### Install `@types/node` for `node`:

   -  🤷‍♂️ yarn:

   ```ts
      yarn add -D @types/node
   ```

   -  🤷‍♂️ npm:

   ```ts
      npm i -D @types/node
   ```

## Create a Simple Server with Express JS and TypeScript :

-  ## create a src folder: In Src folder create `app.ts` and `server.ts`

   ```ts
   // app.ts code :
   import express, { Request, Response } from "express";
   const app = express();

   app.get("/", (req: Request, res: Response) => {
      res.status(200).send({
         message: "Yah!!! Learning server is running now ",
      });
   });

   export default app;
   ```

   ```ts
   // server.ts code :
   import { Server } from "http";
   import app from "./app";
   const PORT = 5000;
   let server: Server;

   async function bootstrap() {
      server = app.listen(5000, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   }

   bootstrap();
   ```

### Learn Express Parser:

|                 name                 |                  why use                  |          example          |
| :----------------------------------: | :---------------------------------------: | :-----------------------: |
|           `express.json()`           | use to parse `application/json` type data | `app.use(express.json())` |
|           `express.text()`           |    use to parse `text/plain` type data    | `app.use(express.json())` |
| `express.static(__dirname + public)` |    use to parse `text/plain` type data    | `app.use(express.json())` |

# :wave: Middleware :

-  An Express Application is an essentialy series of middleware functions calls.
-  ## :point_right: What is middleware :

   -  A middleware is a function.
   -  ##### :point_right: Middleware has access of three things
      -  request object(req)
      -  response object(res)
      -  the next middleware function. (next())
   -  ##### :point_right: A middleware function can do
      -  send response directly (সরাসরি রেসপন্স পাঠাতে পারে )
      -  after completing task call the next middleware on stack. (অথবা next()
         কে কল করে দিবে পরবর্তী middleware কে কাজ করার জন্য )
   -  ##### :point_right: Generally we store our middleware file in middleware folder.
      -  create a :file_folder:`middleware` on `root folder`.
      -  create a ":page_with_curl:`file.js` for middleware file.
      -  write a function with three parameters `(req, res, next)`.

-  ## :point_right: There are five types of middleware in Express JS.

   -  ### :point_right: Build In Middleware: like `express.json()`.

      -  `express.json()` helps to receive `json data` from `req.body`;
      -  Build in middleware will be use with `app.use(middleware)` parameter
         before routes and database connection
      -  Example:

      ```js
      app.use(express.json());
      ```

   -  ### :point_right: Application Label Middleware :

      -  Create a :page_with_curl:`file.js` for middleware.
      -  Create a `function` with three parameters `(req, res, next)`.
      -  A middleware function must `return` neither `response to client` or
         call the `next()` function
      -  then write `function codes ` and `export ` the function.

         ```js
         // the middleware counts applications every request
         let counter = 0;
         const viewCount = (req, res, next) => {
            counter++;
            console.log(counter);
            // res.send(" i send data "); // send the resposne directly
            next(); // call the next middleware:
         };

         module.exports = viewCount;
         ```

      -  to use the middleware just pass as parameter of
         `app.use(middlewareFunc)`.
      -  Application Label middleware function must call before
         `database connection` and `api routes`
      -  Example:

         ```js
         const viewCount = require("./middleware/viewCount/");

         app.use(viewCount);
         ```

   -  ### :point_right: Router Level Middleware :
      -  Router level middleware creation process like
         `Application level middleware`
      -  ### :point_right: how to use router level middleware?
      -  `pass` the middleware as parameter of `router.method()` before
         `controller function`.
      -  Example : -
      ```js
      router.get("/", viewCount, handleProduct.getProducts);
      ```
   -  ### :point_right: Third Partty Middleware:

      -  Third Partty pacakage provide some middleware.
      -  we can use `third party middleware` as `application level middleware`
         call the `middleware` in `app.use(middleware())`
      -  Example:

      ```js
      const { default: rateLimit } = require("express-rate-limit");

      const limiter = rateLimit({
         windowMs: 15 * 60 * 1000, // 15 minutes
         limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
         standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
         legacyHeaders: false, // Disable the `X-RateLimit-*` headers
         // store: ... , // Use an external store for more precise rate limiting
      });

      app.use(limiter);
      ```

      -  create middleware function on into middleware folder:

      ```js
      const { default: rateLimit } = require("express-rate-limit");

      const limiter = rateLimit({
         windowMs: 15 * 60 * 1000, // 15 minutes
         limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
         standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
         legacyHeaders: false, // Disable the `X-RateLimit-*` headers
         // store: ... , // Use an external store for more precise rate limiting
      });

      module.exports = limiter;
      ```

      -  We can use `third party middleware` as `router level middleware` by
         call the middleware before `controller function` of
         `rotuer.method(middleware, contorller_func)`
      -  Example:

      ```js
      router.get("/", viewCount, limiter, handleProduct.getProducts);
      ```

   -  ### :point_right: ERROR Handling Middleware:

      -  error handle middleware accept an extra parameter err.
      -  syntax:

      ```ts
      function ErrorHandler(err, req, res, next) {
         console.log(err.message, err.name, err.stack);
         res.status(500).send({
            message: err.message,
            name: err.name,
         });
      }
      ```





## Route Management In Express JS : 
