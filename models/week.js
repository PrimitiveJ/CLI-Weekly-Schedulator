const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const daySchema = new mongoose.Schema({
    Events: [String],
    Tasks: [String],

})

const weekSchema = new mongoose.Schema({
    Monday: daySchema,
    Tuesday: daySchema,
    Wednesday: daySchema,
    Thursday: daySchema,
    Friday: daySchema,
    Saturday: daySchema,
    Sunday: daySchema,
    weekOf: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
})

weekSchema.plugin(AutoIncrement, { inc_field: 'id' });

weekSchema.methods.weekIs = function() {
    console.log(`The current date is ${this.weekOf}`)
}

module.exports = mongoose.model("Week", weekSchema)