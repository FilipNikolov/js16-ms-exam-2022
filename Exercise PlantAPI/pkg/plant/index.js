const mongoose = require('mongoose');

const Plant = mongoose.model(
    'plants', {
        name: String,
        likes_sun: Number,
        likes_water: Number,
        has_flower: Boolean,
        has_thorns:Boolean,
        found_on_contients:
    },
    'plants'
);
