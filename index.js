/* // LR 10C ----------------------------------------------------------------------
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var natural = require('natural');
var classifier = new natural.LogisticRegressionClassifier();

const trainData = require("./train_9.json");
function trainModel() {
    trainData.forEach(obj => classifier.addDocument(
        obj.key,
        obj.value
    ));
    classifier.train();

    classifier.save('LR_classifier9.json', function (err, classifier) {
        // the classifier is saved to the classifier.json file!
    });
}
//trainModel();

const testData = require("./test_9.json");
natural.LogisticRegressionClassifier.load('LR_classifier9.json', null, function (err, classifier) {
    console.log("Actual - Predicted");
    testData.forEach(obj => console.log(
        obj.value, "-", classifier.classify(obj.key))
    );
});

app.get('/', (req, res) => {
    res.send('Classification server is running...')
})

app.listen(port, () => {
    console.log(`Classifier app is listening on port ${port}`)
}) */


// NB 10C ----------------------------------------------------------------------
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var natural = require('natural');
var classifier = new natural.BayesClassifier();

const trainData = require("./train_9.json");
function trainModel() {
    trainData.forEach(obj => classifier.addDocument(
        obj.key,
        obj.value
    ));
    classifier.train();

    classifier.save('NB_classifier9.json', function (err, classifier) {
        // the classifier is saved to the classifier.json file!
    });
}
//trainModel();

const testData = require("./test_9.json");
natural.BayesClassifier.load('NB_classifier9.json', null, function (err, classifier) {
    console.log("Actual - Predicted");
    testData.forEach(obj => console.log(
        obj.value, "-", classifier.classify(obj.key))
    );
});

app.get('/', (req, res) => {
    res.send('Classification server is running...')
})

app.listen(port, () => {
    console.log(`Classifier app is listening on port ${port}`)
})