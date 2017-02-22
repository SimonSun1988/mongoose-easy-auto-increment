
var mongoose = require('mongoose');
var assert = require('assert');
var autoIncrement = require('../index');

mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

describe('create doc and save', function () {
  this.timeout(2000);

  it('should have sn number', function (done) {
    var connection = mongoose.createConnection('mongodb://localhost:27017/mongoose-easy-auto-increment');

    var userSchema = new mongoose.Schema({
      name: String,
      age: Number
    });
    userSchema.plugin(autoIncrement, { field: 'sn', collection: 'Counters' });

    var User = connection.model('User', userSchema);
    var user = new User({
      name: 'example',
      age: 65535
    });

    user.save(function (err, doc) {
      assert.equal(doc.name, 'example');
      assert.equal(doc.age, 65535);
      assert.equal(typeof doc.sn, 'number');
      done(err);
    });

  });
});


