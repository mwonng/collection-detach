var colors = require('colors');

const prevArray = [
    {
        id: 1,
        name: 'Michael',
        tag: "old"
    },
    {
        id: 2,
        name: 'Sherry',
        tag: "old"
    },
    {
        id: 3,
        name: 'Lee',
        tag: "old"
    },
]

const newArray = [
    {
        id: 1,
        name: 'Michael',
        tag: "old"
    },
    {
        id: 2,
        name: 'Sherry',
        tag: "old"
    },
    {
        name: 'Jason',
        tag: "old"
    },
    {
        name: 'Molly',
        tag: "new"
    },
    {
        name: 'Daniel',
        tag: "new"
    },
]
module.exports = (prev, current) => {
    let old = current.filter( a => a.id !== undefined );
    let incoming = current.filter( a => a.id === undefined );
    let deleted = prev.filter( a => {
        result = current.find( e => e.id === a.id)
        if (!result) {
            return a
        }
    })
    return {
        update: old,
        new: incoming,
        deleted: deleted
    }
}

const old = newArray.filter( a => a.id !== undefined );
const incoming = newArray.filter( a => a.id === undefined );
const deleted = prevArray.filter( a => {
    result = newArray.find( e => e.id === a.id)
    if (!result) {
        return a
    }
})

// console.log('Old data:\n'.green, prevArray);
// console.log('New data:\n'.green, newArray);
// // console.log('new data 3:', newArray[3][":id"]);
// console.log('need to updated:\n'.red, old);
// console.log('need to create:\n'.red, incoming);
// console.log('need to deleted:\n'.red, deleted);
