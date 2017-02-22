# mongoose-easy-auto-increment
mongoose field auto increment more easier

## Install

`npm install mongoose-easy-auto-increment --save`

## Usage

```js
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-easy-auto-increment';

let connection = mongoose.createConnection('your-mongodb-url');

let userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

userSchema.plugin(autoIncrement, { field: 'sn', collection: 'Counters' });

let User = connection.model('User', userSchema);

module.exports = {
    User
};
```