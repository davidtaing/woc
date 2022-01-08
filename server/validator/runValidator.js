const { validationResult } = require('express-validator');
/* 
    Validation middleware
*/

/**
 *  middleware to validate 
 * body send through API call
 */
module.exports.validate = (rules) => [
    ...rules,
    (req, res, next) => {
        const err = validationResult(req);

        // failed validation
        if (!err.isEmpty())
            return res.status(400).json({ error: mapError(err.errors) });

        next();
    },
];

// mapping list of failed validations
const mapError = (errors) =>
    errors.map((e) => ({ param: e.param, msg: e.msg }));
