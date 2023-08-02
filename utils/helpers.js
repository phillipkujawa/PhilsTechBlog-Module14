module.exports = {
    getFormattedDate: function (date) {
        return date.toISOString().split('T')[0];
    }
};
