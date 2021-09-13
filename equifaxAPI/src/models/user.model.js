const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    edad: {
        type: Number,
        unique: false,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

UserSchema.pre('save', async function(next) {

    const user = this;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();

});

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('user', UserSchema);