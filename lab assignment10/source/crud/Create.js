
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://harshasaranam:fuckdude123@ds015760.mlab.com:15760/labs";
var insertDocument = function(db, callback) {
    db.collection('abc').insert( {
        "fname" : "Arun",
        "lname" : "Anthati",
        "email": "aab57@mail.umkc.edu",

        "password":"test123"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the abc collection.");
        callback();
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});