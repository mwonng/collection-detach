var colors = require('colors');

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
