module.exports = (prev, current) => {
    let old = current.filter( a => a._id !== undefined );
    let incoming = current.filter( a => a._id === undefined );
    let deleted = prev.filter( a => {
        result = current.find( e => e._id === a._id)
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
