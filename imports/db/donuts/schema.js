import SimpleSchema from 'simpl-schema';

const DonutsSchema = new SimpleSchema({
    name: {
        type: String
    },
    type: {
        type: String,
        allowedValues: ['cc-donut-type-1', 'cc-donut-type-2', 'cc-donut-type-3']
    },
    isComestible: {
        type: Boolean,
        optional: true,
        allowedValues: [true, false]
    },

    price: {
        type: Number
    },

    createdAt: {
        type: Date,
        optional: true
    },

    userId: {
        type: String,
        optional: true
    }
});

export default DonutsSchema;