const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var natural = require('natural');
var classifier = new natural.BayesClassifier();


function run() {
    classifier.addDocument(
        "During the rains, the road gets easily flooded resulting in a lot of traffic on rainy days.",
        "roads"
    );
    classifier.addDocument(
        "The surface of the road is broken by heavy rains which have created the craters, making our journey worse. Most of the vehicles keep avoiding these craters and stick to one side of the road resulting in slow-moving traffic.",
        "roads"
    );
    classifier.addDocument(
        "This segment of the road was dug up 3 months before for some pipeline work. The road was not patched properly and a rough and uneven layer of concrete was dumped on these segments which made it extremely hard to drive on these segments.",
        "roads"
    );
    classifier.addDocument(
        "For the last four months, the road has been almost impassable. We have made several complaints, but no action has been taken.",
        "roads"
    );
    classifier.addDocument(
        "Bad Condition of Roads in our area.",
        "roads"
    );
    classifier.addDocument(
        "We beg to draw your kind attention to the bad road condition in our locality. The local residents are facing severe difficulties in transportation due to these bad roads.",
        "roads"
    );
    classifier.addDocument(
        "There is no appropriate drainage system by the side of the roads, which creates water overflow issues in rainy seasons and drainage clogging issues throughout the year.",
        "roads"
    );
    classifier.addDocument(
        "The main roads and the sub-roads connecting from the main road to our area are in a very poor condition. There are chances of road accidents every day. Many accidents leading to body injuries have already happened on these roads in the past. There is no appropriate drainage system by the side of the roads, which creates water overflow issues in rainy seasons and drainage clogging issues throughout the year.",
        "roads"
    );
    classifier.addDocument(
        "The children are facing trouble in going to school. The elders are fearful of falling down on damaged portions of the roads. The four-wheelers are especially facing hurdles in transporting. The arrival of ambulances at the patient's house is unnecessarily delayed because of the bad roads.",
        "roads"
    );
    classifier.addDocument(
        "The roads in this area of the city are in very bad condition. They have not been repaired for the last over three years. The roads have so many pitfalls which sometimes cause accidents for unwary drivers.",
        "roads"
    );
    classifier.addDocument(
        "The streets are not swept properly and regularly.",
        "roads"
    );
    classifier.addDocument(
        "For the last four months the road has been almost impassable. The surface of the road is broken by the heavy rains. There are heaps of road material on both sides of the road. They leave only little room in the middle.",
        "roads"
    );
    classifier.addDocument(
        "The roads constructed at our locality are not having proper markings and also have improper lane markings. The street signboards are also placed incorrectly and even in some places boards are not placed which is causing issues for all the travelers and passers-by.",
        "roads"
    );
    classifier.addDocument(
        "Over the past few years, the condition of the road has much worsened since it has developed many pitfalls, ranging from small to dangerously big ones. A slight rainfall makes the road muddy, slippery, and submerged, making it extremely impossible for pedestrians to walk along with it. Moreover, vehicles can't ply freely and often fall a victim to submerged pitfalls.",
        "roads"
    );
    classifier.addDocument(
        "We faced heavy and prolonged rains this time and as a result, the roads have turned into a mesh of potholes. Needless to say, the divider and side markings have faded too.",
        "roads"
    );
    classifier.addDocument(
        "The potholes on the roads have damaging effects on the vehicles plying the roads. Both the private owners of vehicles and commercial bus drivers are wailing daily, complaining about the damaging effects of these roads on their vehicles. Many private car owners have parked their cars because they spend a lot of money repairing their cars which are damaged daily as a result of the poor state of the roads while many transporters have withdrawn their vehicles from the roads. This ultimately affects the movement of people and goods from one place to the other in the area. As a result of this, transport fare is exorbitant.",
        "roads"
    );
    classifier.addDocument(
        "I live in an area where the roads are small and parking is limited to the people who live here. I would like to make a complaint against the bus/truck drivers who always park on the road and block ups the one-way road. This makes the people late for work or appointments. Imagine if it was a police car or ambulance and they couldn’t get past fast enough.",
        "roads"
    );
    classifier.addDocument(
        "Expressing my opposition to the proposal for the construction of a new road across the local park. I am not alone in my concerns, and many locals share my worries about the increase in traffic, the destruction of the park, and the increased dangers. The park acts as a safe route for many children as they make their way to High School. A road in the way is, of course, going to increase the risk of traffic accidents on a daily basis. There is no need for a road to pass through the park, and as such, I would hope that you would not support the new road proposal.",
        "roads"
    );
    classifier.addDocument(
        "We have been witnessing for a month that most of the roads within the society are in very poor conditions. Besides, there are no marking lanes for the speed limit and zebra crossing, and lots of pits and pots are visible on the main road where most vehicles got stuck. Due to this, I, as well as other people in the area, are facing many issues.",
        "roads"
    );
    classifier.addDocument(
        "Bad Condition of Roads in our area. The prime problem is that we won’t be able to reach offices on time due to pathetic conditions of the roads including pothole which leads to traffic congestion daily. In addition, kids traveling times have increased because of the traffic low and they often came late from school, hence children don’t have time to complete their homework and take part in other activities.",
        "roads"
    );
    classifier.addDocument(
        "The road that connects Nimtola with Boropul was the metaled road, though quite narrow. About one year back, the road was cut open to lay water pipes, and after work was over, the road was covered with withstand and mud. It was expected that the road would be restored to its metallic condition after the rainy season was over. But that hope of the residents has been belied, and the road’s state has gone from bad to worse. The road has developed a lot of potholes. ",
        "roads"
    );
    classifier.addDocument(
        "I would like to draw your kind attention to the worst condition of M.A Aziz road. This road is always busy because it connects the EPZ. Over the past few months, no steps were taken to repair the road. Moreover, heavy rains have been damaged as the main road, buses, taxis, heavy trucks, minibusses, etc. run at high speed. ",
        "roads"
    );
    classifier.addDocument(
        "The road is bad. Many people injure.",
        "roads"
    );
    classifier.addDocument(
        "The poorly maintained roads and sidewalks are causing lots of inconvenience to the pedestrians and commuters with vehicles. It has been six months, we are living in such pathetic conditions and our multiple attempts for complaints have still not resulted in any action from the municipal authority.",
        "roads"
    );
    classifier.addDocument(
        "There are no speed breakers and people are driving carelessly which causes a dangerous accidents. However, I already had complained to the chairman. But I don't know why they are not taken seriously. Yesterday, My neighbor's friend died because of holes on the road.",
        "roads"
    );
    classifier.addDocument(
        "The condition of the road in our locality is very poor. Accidents are common on this road. It is only because of the condition of this road.  Holes, rocks, etc are everywhere. Which is not good.",
        "roads"
    );
    classifier.addDocument(
        "The roads are broken at many places full of wide pits due to which heavy vehicles like trucks, tempo stuck for long hours which lead to heavy traffic jam and chaos among people. School children and office goers are always getting late due to this.",
        "roads"
    );
    classifier.addDocument(
        "Park Street, the only road we use to get off and in, from the community, was damaged around three months ago when we had a heavy downpour for a week. The roads have many holes, and crumbly places and are below usable condition with uneven flagstones.  ",
        "roads"
    );
    classifier.addDocument(
        "The roads in our locality have not been repaired for a long time. There are pits and ditches on the roads everywhere. The condition of the road becomes all the worst during the rainy season. They cause road accidents.",
        "roads"
    );
    classifier.addDocument(
        "The roads in our locality and are completely broken. Also, for a long time, it has been impassable making it difficult for the residents to pass through the route.",
        "roads"
    );
    classifier.addDocument(
        "There are not enough waste bins in my area. That's why people are dumping waste on the roadside.",
        "wastes"
    );
    classifier.addDocument(
        "Dirty water spills on the road while transporting waste in an open truck.",
        "wastes"
    );
    classifier.addDocument(
        "City Corporation waste transportation during the daytime should be stopped.",
        "wastes"
    );
    classifier.addDocument(
        "Modern equipment should be added to waste management.",
        "wastes"
    );
    classifier.addDocument(
        "Dumping waste on the roadside spreads bad smells and pollutes the environment.",
        "wastes"
    );
    classifier.addDocument(
        "Tannery's solid and chemical waste has been plaguing nearby residential areas for decades.",
        "wastes"
    );
    classifier.addDocument(
        "Waste cleaning stuffs are not coming regularly in the Oxygen area.",
        "wastes"
    );
    classifier.addDocument(
        "Business is done with garbage in different areas of Chittagong, 80 to 100 taka is charged for waste collection in various areas, but the city corporation is supposed to make this work free. Then why the extra money is charged? Drawing the attention of the current administrator in this matter.",
        "wastes"
    );
    classifier.addDocument(
        "In the name of modern waste management, all the garbage is being burnt in the open every day and the environment is being damaged.",
        "wastes"
    );
    classifier.addDocument(
        "The wastes of all the canals connected to the river Karnafuli come to the shore of the river causing problems for the residents.",
        "wastes"
    );
    classifier.addDocument(
        "Patenga Beach tourist attraction will increase if wastes are managed properly.",
        "wastes"
    );
    classifier.addDocument(
        "Remaining packets of food, dirt and coconut shells are piled up on the Patenga beach by tourists and local shopkeepers causing the garbage to be disposed of on the beachside.",
        "wastes"
    );
    classifier.addDocument(
        "Certain people burn shop waste almost every afternoon/evening, there is a lot of black smoke. The nose began to burn in the smoke. Authority should take action.",
        "wastes"
    );
    classifier.addDocument(
        "I live in West Baklia, Bogarbil area. Here they are stacking garbage on the roads, there is no water in the canals, only polythene, and dirt. If there is anyone from the administration, please pay attention.",
        "wastes"
    );
    classifier.addDocument(
        "Garbage cars are not coming on time that's why garbage is stacked somewhere in a sack causing environmental pollution.",
        "wastes"
    );
    classifier.addDocument(
        "Most of the drains in Chittagong are open and the pile of garbage is so much that one cannot even breathe if he falls. If quick action is not taken in this matter, many more can die.",
        "wastes"
    );
    classifier.addDocument(
        "Are there any fixed fees for waste collection from home by the city corporation?",
        "wastes"
    );
    classifier.addDocument(
        "We have an educational institution in Muradpur, Chittagong. Due to the fact that our educational institution is on slightly higher ground, garbage trucks do not come here.",
        "wastes"
    );
    classifier.addDocument(
        "In my area garbage bill is taking 100 Tk. still, I have to carry and put the dirt under the building.",
        "wastes"
    );
    classifier.addDocument(
        "There are numerous used PPEs that are supposed to be burned near the Covid ward of the Chittagong General Hospital. City residents will have to suffer the consequences of extreme mismanagement of waste by the authority.",
        "wastes"
    );
    classifier.addDocument(
        "I kindly request Chittagong City Corporation to relocate the pile of garbage floating in front of MPB Gate No. 1.",
        "wastes"
    );
    classifier.addDocument(
        "This gas pipe adjacent to Gate No. 2, Chashma Hill Mosque, Mayor Gali-Iron Bridge is in a dangerous condition under garbage pressure. It can explode and accident at any time. Drawing the attention of authorities.",
        "wastes"
    );
    classifier.addDocument(
        "Garbage is constantly being dumped in front of Alhaj Yaqub Ali Girls College in the Fakirgali area of ​​Rampur Ward No. 25 of Chittagong. As a result, the stench of garbage is seriously polluting the environment of the college and the surrounding area.",
        "wastes"
    );
    classifier.addDocument(
        "Till now the waste removed from the drain of the Gosaildanga Loknath Dham line has not been cleaned. People can't travel. Responsible officers, please arrange to remove this garbage.",
        "wastes"
    );
    classifier.addDocument(
        "Agrabad Karmas College Road has become unqualified due to garbage on the road. Drawing attention to authority.",
        "wastes"
    );
    classifier.addDocument(
        "Please check the condition of Chittagong City Corporation's vehicle. The condition of the garbage trucks and the vans of the organizations at the neighborhood level is throwing the garbage on the roadway.",
        "wastes"
    );
    classifier.addDocument(
        "The negligence on a small matter is seen from the past mayor to the current mayor. And that's the stinky garbage car crossing the city main street in full open. I encountered this open garbage car twice in the last seven days while traveling from Bahaddarhat to the GEC junction. All I had left was to vomit. I hope the mayor will think about the matter.",
        "wastes"
    );
    classifier.addDocument(
        "I'm tired of my neighbor dumping waste on my land. Please take proper action to keep the environment beautiful.",
        "wastes"
    );
    classifier.addDocument(
        "The city corporation has taken out the garbage from the sewer, the footpath is closed. The smell is so bad, that the dirt will be drenched in the rain. The water will be blocked. They will dry and dust. Yet there is no one to remove those garbage. The situation of footpath adjacent to irrigation building opposite Parliament building.",
        "wastes"
    );
    classifier.addDocument(
        "The city corporation should raise awareness against dumping plastic waste in sewerage. It causes flooding in the city during monsoon.",
        "wastes"
    );
    classifier.addDocument(
        "In the evening, too many mosquitoes in our area.",
        "mosquitos"
    );
    classifier.addDocument(
        "Too many mosquitoes to handle.",
        "mosquitos"
    );
    classifier.addDocument(
        "The problem becomes severe at the time of study of school students cause of mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "Never seen this number of mosquitoes ever. Just unbearable.",
        "mosquitos"
    );
    classifier.addDocument(
        "The risk of Dengue is too high.",
        "mosquitos"
    );
    classifier.addDocument(
        "Lots of mosquitoes. There is no system to kill them in our area.",
        "mosquitos"
    );
    classifier.addDocument(
        "After the evening, the people of the area became restless of mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito infestation is on the rise due to piles of garbage and various construction materials lying on the road.",
        "mosquitos"
    );
    classifier.addDocument(
        "There are no mosquito repellent sprays in various drains and stagnant water is the breeding ground for mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito larvae and full-grown mosquitoes are swarming in the canals and drains of different areas of the city including Halishahar, Agrabad, Muradpur, 2 No Gate, Bahaddarhat, Baklia.",
        "mosquitos"
    );
    classifier.addDocument(
        "The presence of Aedes mosquitoes is found in most of the houses in the city. As a result, the risk of dengue has increased. Dengue patients have already been identified in the city and upazila.",
        "mosquitos"
    );
    classifier.addDocument(
        "There are allegations that mosquito repellent was sprayed on the residences of senior government officials including district administration and police administration in Chittagong. But there is no mosquito repellent spray activity in 41 wards, especially in the mosquito breeding grounds, various drains, and stagnant water.",
        "mosquitos"
    );
    classifier.addDocument(
        "In most parts of the city, dams have been built on canals due to ongoing development projects to alleviate water logging. As a result, mosquito breeding is increasing in the bound water.",
        "mosquitos"
    );
    classifier.addDocument(
        "In our area, sometimes the responsibility of killing mosquitoes is fulfilled by spraying ineffective medicine, even if the mosquito does not die.",
        "mosquitos"
    );
    classifier.addDocument(
        "In our area, the regular removal of dirt is done, but cleaning of drains and mosquito repellent activities are not done regularly.",
        "mosquitos"
    );
    classifier.addDocument(
        "There is no such place in Chittagong, where mosquito infestation is not an issue. Surprisingly, where mosquitoes were never found, there is now a great deal of mosquito repression.",
        "mosquitos"
    );
    classifier.addDocument(
        "Chikungunya, a mosquito-borne disease, has plagued countless people for years. Chikungunya panic has also appeared in the minds of the city dwellers as the mosquito infestation has increased again. These mosquitoes can also spread deadly diseases such as dengue, malaria, and the Zika virus.",
        "mosquitos"
    );
    classifier.addDocument(
        "Although the cleaners of CCC were supposed to spray mosquito repellent in the morning and afternoon, it did not happen in the real sense. These need to be done properly.",
        "mosquitos"
    );
    classifier.addDocument(
        "There is no one to see if the mosquito repellent works at all. This requires proper monitoring. Although these issues are discussed and criticized every year, the authorities seem to ignore them.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito bites in the morning and evening are causing various diseases including malaria and dengue. Many people are seen taking shelter in mosquito nets even during the day to avoid mosquito infestation.",
        "mosquitos"
    );
    classifier.addDocument(
        "One million residents here have become helpless to mosquitoes. Especially the life of the lower castes around the drains has become miserable. Life here is getting stagnant like a mosquito.",
        "mosquitos"
    );
    classifier.addDocument(
        "Many people are leaning towards different coils and sprays to avoid mosquitoes. These coil sprays contain financially damaging as well as physically harmful substances.",
        "mosquitos"
    );
    classifier.addDocument(
        "I have never seen so many mosquitoes in my entire life. Even if the doors and windows are closed 24 hours a day, work is not being done. Everyone in the family is upset because of the mosquitoes. And if this is the case in elite areas, then it is difficult to understand what happens in ordinary places",
        "mosquitos"
    );
    classifier.addDocument(
        "Many people are dying prematurely due to dengue. Many are being treated in different hospitals. Aedes mosquitoes must be killed regularly to survive.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito infestation has increased in the port city of Chittagong since the end of winter. Despite the City Corporation's demand for adequate and regular spraying of medicines, the corporation has failed to provide relief to the citizens from mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "It has become difficult to stay calm as evening falls. Citizens are angry over Chasik's failure to eradicate mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito larvae and adult mosquitoes are chirping in various drains. Water stagnation in most of the city's drains has been further hampered by the obstruction of water flow to carry out the project. As a result, mosquito breeding in stagnant water has increased at an unusual rate.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito repellent Fogger machine emits smoke, but mosquitoes do not die. Even if the medicine is sprayed again, it does not work at all. Chittagong City Corporation spends crores of takas every year to kill mosquitoes but fails to kill mosquitoes.",
        "mosquitos"
    );
    classifier.addDocument(
        "Mosquito bites are affecting the city dwellers with various diseases. In such a situation, the city dwellers who are restless due to mosquito bites are leaning toward the various coil sprays available in the market. Coil-spray chemicals have health risks as well as increasing financial costs.",
        "mosquitos"
    );
    classifier.addDocument(
        "Although there is talk of huge expenditure, there is no visible activity of mosquito eradication activities. As a result, mosquito infestation has increased in the city.",
        "mosquitos"
    );
    classifier.addDocument(
        "The unauthorized shops built/constructed on the footpath of the GEC intersection, Bahaddarhat, Asian highway, and Dewanhat area, occupying footpath, which is causing an issue for the visitors and is also affecting the traffic.", "others"
    );
    classifier.addDocument(
        "We are residents of the Agrabad area and have been facing an acute shortage of drinking water for more than a week. Every member of society is disturbed because of the unavailability of water supply which is the basic need of every human being.", "others"
    );
    classifier.addDocument(
        "The present drainage system is so defective that a good shower would create the whole area into a collection of small lakes and pools. The clogging of rainwater in some of these parts of the city becomes as deep as three feet causing waterlogging.", "others"
    );
    classifier.addDocument(
        "We would like to draw your kind attention to the poor maintenance of the streetlights in our locality. There are a few street lights existing in our locality. Most of these are either not working or are in very poor condition providing dim light, which is of little to no use for the inhabitants of this ward.", "others"
    );
    classifier.addDocument(
        "We are getting a supply of dirty and contaminated water for the last 2 months. The supplied water stinks like sewage water and looks unfit for drinking. Due to this severe problem, we are purchasing drinking water from private vendors.", "others"
    );
    classifier.addDocument(
        "People in our locality are suffering a lot due to the faulty pipelines in the sewage system. Because of the sewage problem, we face unhygienic conditions in our area.", "others"
    );
    classifier.addDocument(
        "My complaint is regarding the sweeper assigned to clean the streets in our area. Respected, the sweeper is not at all punctual and does not clean the street a number of days in a week. I apologetically would inform you that the sweeper does not sweep properly and I would request you to kindly look into the same and take some appropriate action.", "others"
    );
    classifier.addDocument(
        "I want to bring your kind attention to the poor sanitary condition in my locality. People have been dumping their waste in various places instead of keeping one fixed place. This careless attitude of people will lead to the breeding of various diseases Such as typhoid fever, dysentery, and food poisoning which will cause big public sanitation.", "others"
    );
    classifier.addDocument(
        "I am writing this letter to inform you that my neighbor, Mr. X, has been creating a nuisance every day. He is an alcoholic and creates a ruckus daily. All the residents of this area are being disturbed by this constant disturbance. such public safety concerns are increasing day by day", "others"
    );
    classifier.addDocument(
        "We would like to draw your kind attention to the lack of enough dispensaries in our locality. There is only one pharmacy in our whole area and we often do not get good service from this.", "others"
    );
    classifier.addDocument(
        "The indiscriminate use of loudspeakers around the clock has made our lives very miserable. Not a single day passes and one can’t escape from the noise pollution.", "others"
    );
    classifier.addDocument(
        "The blaring of loudspeakers at time wedding celebrations adds to the noise in the area. People use the loudspeakers at a high pitch which harms our ears.", "others"
    );
    classifier.addDocument(
        "Due to noise pollution, the patients are unable to take rest. The worst sufferers are students who cannot devote their attention to their studies.", "others"
    );
    classifier.addDocument(
        "My motive is to grab your kind attention towards the issue of air pollution. Recently, I have noticed pollution and a number of gases coming from industries. These gases being hazardous may lead to serious health issues and a hike in air pollution.", "others"
    );
    classifier.addDocument(
        "Most people burn their dumped garbage and plastic in order to get rid of the garbage. I would request you to kindly look into the matter and take some appropriate and strict action against the issue and culprits.", "others"
    );
    classifier.addDocument(
        "In our locality, every fast food stall reuses cooking oil again and again which is hazardous for our health. please take the necessary step to resolve this issue.", "others"
    );
    classifier.addDocument(
        "I live in an area where parking is limited to the people who live here. I would like to make a complaint against the truck drivers who always park in this area.", "others"
    );
    classifier.addDocument(
        "We would like to draw your attention to the need for a playground in our locality. We have many small children as well school-going children in our locality. Due to the absence of any playground, the kids are seen playing on the streets, which is dangerous.", "others"
    );
    classifier.addDocument(
        "This is to inform you that the footpaths of our streets have become camping places for beggars.	", "others"
    );
    classifier.addDocument(
        "I wish to lodge a complaint that a second-hand scooter dealer, opposite my house, often blocks the pavement by parking scooters in a row there.", "others"
    );
    classifier.addDocument(
        "in our locality, there are not enough cemeteries and people are facing difficulties with this issue.", "others"
    );
    classifier.addDocument(
        "I have submitted my birth certificate for name correction, but 4 weeks have passed and I got no feedback for that. my birth certificate number is xyz. I have attached the form in a png image.	", "others"
    );
    classifier.addDocument(
        "In my area, many people are still getting old age allowances for their elderly family members even after passing away. We want your kind attention to cut off these allowances and distribute them to the actual needy.", "others"
    );
    classifier.addDocument(
        "I want to draw the government's attention toward the gradual decay of the public monument located in this area. It is our valuable heritage and national treasure. It is a specimen of great art and architecture. It reminds us of our glorious past.", "others"
    );
    classifier.addDocument(
        "I would like to draw your kind attention to the municipal school in my area. It has a few old building that needs reconstruction.", "others"
    );
    classifier.addDocument(
        "I saw with my own eyes that a poor mother wanted to send some educational documents to her daughter and the staff was completely non-cooperative with her but when a rich person came with an envelope full of money the air of the office changed for him. That is just one basic example of such a case daily if you see there are a hundred cases like this.", "others"
    );
    classifier.addDocument(
        "recently we have noticed an increase in noise pollution in our area because of unplanned street bumps.", "others"
    );
    classifier.addDocument(
        "Illegal occupation of footpath causing traffic jam in epz area.", "others"
    );
    classifier.addDocument(
        "I would like to inform you about the illegal construction of a house opposite to our home. Recently, the government issued a column in the newspaper about illegal property areas of various towns. The plot opposite our house was also mentioned, but recently the construction of a house has begun there.", "others"
    );
    classifier.addDocument(
        "The open drains in the locality spill over even after a small quantity of rain. anyone can fall into the open gutter and it may lead up to the death of the person.", "others"
    );

    classifier.train();

    console.log(classifier.classify("streets are getting blocked by cars"));
    console.log(classifier.classify("is there any cleaning staff coming."));
    console.log(classifier.classify("a slender long - legged fly with aquatic larvae.The bite of the bloodsucking female can transmit a number of serious diseases including malaria and encephalitis."));
    console.log(classifier.classify("illegal occupation of footpaths making no sense."));
}
run();

app.get('/', (req, res) => {
    res.send('Classification server is running...')
})

app.listen(port, () => {
    console.log(`Classifier app is listening on port ${port}`)
})