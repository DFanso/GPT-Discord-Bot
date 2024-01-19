const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');

const dataFilePath = path.join(__dirname, 'userQuestionCounts.json');

function readQuestionCounts() {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify({}));
    }
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
}

function writeQuestionCounts(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 4));
}

function resetQuestionCounts() {
    writeQuestionCounts({});
}


schedule.scheduleJob('0 0 * * *', resetQuestionCounts);
module.exports = {
    readQuestionCounts,
    writeQuestionCounts,
    resetQuestionCounts
};
