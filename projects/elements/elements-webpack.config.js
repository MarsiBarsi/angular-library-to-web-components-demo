const uuidv1 = require('uuid/v1');

module.exports = {
    output: {
        jsonpFunction: 'myElements-' + uuidv1(),
        library: 'elements',
    },
};
