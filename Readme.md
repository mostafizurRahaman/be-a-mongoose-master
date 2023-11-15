# Node Js Core Concept:

## What is Node Js ?

-  Node js is an `asynchronous`, `single-treaded`, `non-blocking` ,
   `even-driven` javaScript runtime environment.
-  Node Js helps us to run javaScript code on server.
-  Node js was developed by Ryhan dal with V8 Engine + C## code.

## What is module In Node Js?

-  Module is an `isolated` and `reusable` block of code and which have
   `own scope`.
-  we can use `common.js` or `esm` module to make sure modular node js.

## Difference Between `common.js` and `esm module`

|    Features     |          common.js          | esm (ECMAScript Module) |
| :-------------: | :-------------------------: | :---------------------: |
|   for import    |          require()          |         import          |
| for export file | `export` / `module.exports` |    `export default`     |
| file extension  |            `.js`            |         `.mjs`          |

## There are three type of `Module` system:

-  ### Local Module: That we created
-  ### Build in Module: Comes with Node Js
-  ### Third party Module: That install from `npm` or others package manager.

## Built In Module:

| module Name |           why use           |                            functions                            | properties |
| :---------: | :-------------------------: | :-------------------------------------------------------------: | :--------: |
|   `path`    | do to all path related task | `basename()` , `parse()`, `dirname()` , `extname()`, `format()` | properties |
|    `fs`     | do to all path related task | `basename()` , `parse()`, `dirname()` , `extname()`, `format()` | properties |
