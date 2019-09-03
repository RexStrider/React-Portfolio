import logo_study_live from '../Assets/Images/study_live.png';
import logo_flip_search from '../Assets/Images/flip_search.png';
import logo_parent_maps from '../Assets/Images/parent_maps.png';
// import logo_crystals_collector from '../Assets/Images/crystals_collector.png';
import logo_forest_initiative from '../Assets/Images/forest-initiative.png';

import React from 'react';

class Project {
    constructor(title, description, logo, github_url, demo_url, contributions) {
        this.title = title;
        this.description = description;
        this.logo = logo;
        this.github_url = github_url;
        this.demo_url = demo_url;
        this.contributions=contributions;
    }

    renderContributions() {
        const ary=[];

        for (const key in this.contributions) {
            ary.push(<li key={key}>{this.contributions[key]}</li>);
        }

        return ary;
    }
}

const projects = [
    new Project (
        "Forest Initiative",
        "A one stop website for learning about the state of our wilderness and getting in contact with our representatives.",
        logo_forest_initiative,
        "https://github.com/RexStrider/ForestInitiative",
        "https://forest-initiative.herokuapp.com/",
        [
            "Built the back-end of the application",
            "Connected Google News API and Google Civic Info API to application",
            "Developed front-end UI for News page and Civic Info page"
        ]
    ),
    new Project(
        "Parent Maps",
        "A community based database where parents can post reviews on various places.",
        logo_parent_maps,
        "https://github.com/RexStrider/berkeleyfamilyfriendly",
        "https://rexstrider.github.io/Parent-Maps/",
        [
            "Set up Firebase database structure for locations, reviews, and users",
            "Connected Firebase back-end to application front-end",
            "Connected Google Maps API to UI",
            "Set up Google Geocoder, turning the location addresses into location co-ordinates and displaying the markers on the map"
        ]
    ),
    new Project(
        "Study Live",
        "A study room where students can gather, chat, and listen to music.",
        logo_study_live,
        "https://github.com/RexStrider/study-live",
        "https://study-live.herokuapp.com/",
        [
            "Designed and implemented the chat UI and back-end",
            "Tested and debugged critical UI components and back-end features during development and deployment"
        ]
    ),
    new Project(
        "Flip Search",
        "A click to search product demo for re-selling houses in the Bay Area.",
        logo_flip_search,
        "https://github.com/RexStrider/flipsearch",
        "https://flipsearch.herokuapp.com/main",
        [
            "Designed and implemented map UI using Geo Json data of the Bay Area",
            "Set up click-to-search feature between Google Map API and the NodeJS back-end"
        ]
    )
    // ),
    // new Project(
    //     "Crystals Collector",
    //     "A guessing game where you collect crystals to get points and try to reach the target number.",
    //     logo_crystals_collector,
    //     "https://github.com/RexStrider/Crystals-Collector",
    //     "https://rexstrider.github.io/Crystals-Collector",
    //     [
    //         "Desgined UI and game logic"
    //     ]
    // )
]

export default projects;