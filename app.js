let info = {
    name: "Nate Mills:",
    career: "Motion Graphics Animator / Editor",
    description: "Time flies when you're having fun, but fruit flies loves bananas"
}

let cream = ['Movies Especially the Thriller, and Drama Genre', 'Gaming with friends and family', 'Spending time with Courtney, and Roux'];

let sprinkles = 'My Interests:';

let ice = 'My Previous Experiences:';

let coco = 'My Skills:';


UpperCase(info.name)
console.log(info.career);
console.log(info.description);

console.log(sprinkles);

for (let i = 0; i < cream.length; i++) {
    console.log(cream[i]);
}

// Currently trying to figure out how to modify the console.log in order to have the bullets and colons in the sample... 

console.log(ice);

function displayPosition(cmpname, jobtitle, descrip) {
    console.log(cmpname, jobtitle, descrip);

}

function UpperCase(fill) {
    let cake = fill.toUpperCase();
    console.log(cake)
}

function displaySkill(skillname, j) {
    if (j < 25) {
        console.log('BAM: ' + skillname);
    } else {
        console.log(skillname);
    }

}

displayPosition('VentureTech Solutions, ', 'Motion Graphics Specialist/Video Editor, ', 'Created videos for promotional and informational purposes for a debt and credit consolidation company')

displayPosition('NJM Media, ', 'Video Editor/Social Media Content Creator, ', 'Self employed business, where I worked with a range of clients creating, and then posting on their social media accounts')

displayPosition('Video Game Enthusiast, ', 'League of Legends Gamer Extraordinaire, ', 'Played League of Legends and other games most of my life from 2012-2021 ranging from 10-14 hours a week easily')

console.log(coco);

displaySkill('League of Legends', 1)

displaySkill('English', 30)

displaySkill('Learning new things', 12)

displaySkill('Reading murder mystery books', 26)

displaySkill('Understanding Javascript Functions', 42)

displaySkill('Finding Nemo', 2)

displaySkill('CSS + HTML', 34)
