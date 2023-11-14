# Learn Aggregation :

## What is Aggregation?

-  Aggregation is a way to process large number of documents in collection by
   means passing through different stages.
-  The stages make up known as pipeline.
-  The Stages in a pipeline can `filter` ,`sort`, `group`, `reshape` & `modify`
   and passing them through pipeline.

## Aggregation `Syntax` :

```js
   db.collection.aggregate([
      // stage one
      {} // : pipeline one
      // stage two
      {} // : pipeline two
      // stage three
      {} // : pipeline three
   ])

```

## Data flow in Aggregation :

```mermaid

   graph TD

   A[collection]--> B[Stage1] --> C[stage2] --> D[Stage3] --> E[Final Out put]

   A -->H[pipeline]-->J[pipeline]-->K[pipeline]--> E



```

## Aggregation Stages or Operators :

-  #### `$match` :

   1. `$match` fields allows us to choose those documents , that we want to work
      with.
   2. we can find or filter
   3. we can pass any query to find out our data in `$match `operator
   4. syntax:

   ```js
   db.collection.aggregate([
      //match stage :
      { $match: query },
   ]);
   ```

   5. Example :

   ```js
   db.test.aggregate([
      // stage1 :
      {
         $match: {
            age: { $lte: 50 },
            skills: { $elemMatch: { name: "JAVASCRIPT", level: "Expert" } },
         },
      },
   ]);
   ```

-  #### `$project` : project stage works for project or selection properties which we need.

   -  Here we used 1 or 0 to select or deselect properties.
   -  syntax :

   ```js
   db.collection.aggregate([
      // match stage:
      // project stage :
      { $project: { propertyName: 1, propertyName: 1 } },
   ]);
   ```

   -  Example :

   ```ts
   db.test.aggregate([
      //stage :
      {
         $match: {
            age: { $lt: 70 },
            skills: { $elemMatch: { name: "C#", level: "Intermidiate" } },
         },
      },
      //stage:
      { $project: { age: 1, skills: 1 } },
      //stage :
      {
         $addFields: {
            course: "Next Level Web Development",
            organization: "Programming Hero",
         },
      },
      // {$out: "level-2"},
      { $merge: "test" },
   ]);
   ```

-  #### `$addFields` : Adds new fields to documents.

   -  But not modify the existing documents :
   -  syntax:

   ```js
   db.collection.aggregate([
      // match stage :
      { $match: { age: { $lte: 20 } } },
      // addFields stage :
      { $addFields: { newPropertyName: value, newPropertyName: value } },
   ]);
   ```

   -  Example :

   ```ts
   db.test.aggregate([
      //stage :
      {
         $match: {
            age: { $lt: 70 },
            skills: { $elemMatch: { name: "C#", level: "Intermidiate" } },
         },
      },
      //stage:
      { $project: { age: 1, skills: 1 } },
      //stage :
      {
         $addFields: {
            course: "Next Level Web Development",
            organization: "Programming Hero",
         },
      },
      // {$out: "level-2"},
      { $merge: "test" },
   ]);
   ```

   -  Output:

   ```json
   [
      // every documents looks like :
      {
         "age": 1,
         "skills": [
            {
               "name": "JAVASCRIPT",
               "level": "Intermediate",
               "isLearning": false
            },
            {
               "name": "C#",
               "level": "Intermediate",
               "isLearning": false
            },
            {
               "name": "C",
               "level": "Intermediate",
               "isLearning": false
            }
         ],
         "course": "Next Level Web Development",
         "organization": "Programming Hero"
      },
      {
         "age": 1,
         "skills": [
            {
               "name": "JAVASCRIPT",
               "level": "Intermediate",
               "isLearning": false
            },
            {
               "name": "C#",
               "level": "Intermediate",
               "isLearning": false
            },
            {
               "name": "C",
               "level": "Intermediate",
               "isLearning": false
            }
         ],
         "course": "Next Level Web Development",
         "organization": "Programming Hero"
      }
   ]
   ```

-  #### `$out` : create a `new collection` with `previous stage` `documents`.

   -  syntax:

   ```ts
   db.collection.aggregate([
      // merge Stage :
      // others stage :
      // out stage :
      { $out: "new collection name" },
   ]);
   ```

   -  Example :

   ```ts
   db.test.aggregate([
      //stage :
      {
         $match: {
            age: { $lt: 70 },
            skills: { $elemMatch: { name: "C#", level: "Intermidiate" } },
         },
      },
      //stage:
      { $project: { age: 1, skills: 1 } },
      //stage :
      {
         $addFields: {
            course: "Next Level Web Development",
            organization: "Programming Hero",
         },
      },
      { $out: "level-2" },
   ]);
   ```

-  #### `$merge` stage : Merge the `previous stage ` documents with `an existing collection`

   -  syntax :

   ```ts
   db.collection.aggregate([
      // match stage :
      // others stage :
      // merge stage :
      { $merge: "existing  collection" },
   ]);
   ```

   -  Example:

   ```ts
   db.test.aggregate([
      //stage :
      {
         $match: {
            age: { $lt: 70 },
            skills: { $elemMatch: { name: "C#", level: "Intermidiate" } },
         },
      },
      //stage:
      { $project: { age: 1, skills: 1 } },
      //stage :
      {
         $addFields: {
            course: "Next Level Web Development",
            organization: "Programming Hero",
         },
      },
      { $merge: "test" },
   ]);
   ```
