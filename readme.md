#Javascript collection detatch function

##Problem

I'm using [GraphqQL](http://graphql.org/ "GraphQL") as my API gateway with [Prisma](https://www.prisma.io/ "Prisma"). But Prisma generate `create`, `connect`, `delete` for their nested objects.

###Example
I have a Order model and a OrderItems, and `Order` has many `OrderItems`.

In the order edit page, it will load data from server of this order info and their order items info and show to user. User can modify it as they want, And after that, I want to update OrderItems after user modified them but actually i dont know wether user change or create or delete for every OrderItems. What i got is a result array and the previous array(before modify).

I think most frameworks have ORM or function to update those collection automatically. But there is not really in GraphqQL/Prisma.

So i create this function to detach the arry into three kind of array:

###Rule to detach:
If object has id as a key, this object should be from the old array and already in database.

- This function will set object those who with id and still in the currentArray as need to be update.
- This function will set object those who with id and not in the currentArray as need to be delete.
- This function will set object those who without id and in the currentArray as need to be create.


##Usage:

**Install in package**
run
```sh
yarn add arrayDetach
```
or
```sh
npm i arrayDetach
```

**import to your code**
```javascript
import arrayDetach from 'collection-detach';
```
or

```javascript
var arrayDetach = require('collection-detach');
```
**detach your arra **

```javascript
result = arrayDetach(prevArray, currentArray)
```

### API
`arrayDetach(prevArray, currentArray).update` : array with objects which need to be update.
`arrayDetach(prevArray, currentArray).new` : array with objects which need to be create.
`arrayDetach(prevArray, currentArray).deleted` : array with objects which need to be delete.



Please use it if you konw why you want to use.