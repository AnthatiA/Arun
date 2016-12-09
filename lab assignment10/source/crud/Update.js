
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://harshasaranam:fuckdude123@ds015760.mlab.com:15760/labs';

var updateUserwithName = function(db,callback) {
    db.collection('abc').update( {

        "fname":"test"
         // "_id": {"58194c35c9b561280453cc9c"}
}, {
            $set: { "fname": "arun", type: 0,  },
            $currentDate: { lastModified: true }
        },

        function(err, result) {
        assert.equal(err, null);
        console.log("updated a document into the abc collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    updateUserwithName(db, function() {
        db.close();
    });
});
