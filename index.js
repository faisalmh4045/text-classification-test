const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var natural = require('natural');
var classifier = new natural.BayesClassifier();

const data = require("./dataset.json");
function trainModel() {
    data.forEach(obj => classifier.addDocument(
        obj.key,
        obj.value
    ));
    classifier.train();

    /* classifier.save('classifier1.json', function (err, classifier) {
        // the classifier is saved to the classifier.json file!
    }); */
}
trainModel();

natural.BayesClassifier.load('classifier.json', null, function (err, classifier) {
    console.log(classifier.classify("streets are getting blocked by cars."));
    console.log(classifier.classify("is there any cleaning staff coming."));
    console.log(classifier.classify("There is no such place in Chittagong, where mosquito infestation is not an issue."));
    console.log(classifier.classify("illegal occupation of footpaths making no sense."));
});

app.get('/', (req, res) => {
    res.send('Classification server is running...')
})

app.listen(port, () => {
    console.log(`Classifier app is listening on port ${port}`)
})