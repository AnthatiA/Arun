
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://harshasaranam:fuckdude123@ds015760.mlab.com:15760/labs';

var deleteUserwithName = function(db,callback) {
    db.collection('abc').remove( {

            "fname":"arun"

        },

        function(err, result) {
            assert.equal(err, null);
            console.log("deleted a document into the abc collection.");
            callback();
        });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    deleteUserwithName(db, function() {
        db.close();
    });
});

