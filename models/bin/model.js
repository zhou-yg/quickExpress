var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/projectName';

var connectedDb = null;

var connectTo = function () {
    return new Promise(function (resolve) {
        return MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            return resolve(db);
        });
    });
};

var dbReady = function(cb) {
    if (connectedDb) {
        return cb(connectedDb);
    } else {
        return connectTo().then(function(db) {
            connectedDb = db;
            return cb(connectedDb);
        });
    }
};

module.exports = {

    /**
     * collection名，生成db ready回调函数的回调
     * @param collectionName
     * @returns {Function}
     */
    db:function(collectionName){
        return function (cb) {
            dbReady(function (db) {
                cb(db.collection(collectionName));
            });
        }
    }
};