import logo_study_live from '../Assets/Images/study_live.png';
import logo_flip_search from '../Assets/Images/flip_search.png';
import logo_parent_maps from '../Assets/Images/parent_maps.png';
import logo_crystals_collector from '../Assets/Images/crystals_collector.png';
import logo_forest_initiative from '../Assets/Images/forest-initiative.png';

class Project {
    constructor(title, description, logo, github_url, demo_url) {
        this.title = title;
        this.description = description;
        this.logo = logo;
        this.github_url = github_url;
        this.demo_url = demo_url;
    }
}

const projects = [
    new Project (
        "Forest Initiative",
        "A one stop website for learning about the state of our wilderness and getting in contact with our representatives.",
        logo_forest_initiative,
        "https://github.com/RexStrider/ForestInitiative",
        "https://forest-initiative.herokuapp.com/"

    ),
    new Project(
        "Parent Maps",
        "A community based database where parents can post reviews on various places.",
        logo_parent_maps,
        "https://github.com/RexStrider/berkeleyfamilyfriendly",
        "https://rexstrider.github.io/Parent-Maps/"
    ),
    new Project(
        "Study Live",
        "A study room where students can gather, chat, and listen to music.",
        logo_study_live,
        "https://github.com/RexStrider/study-live",
        "https://study-live.herokuapp.com/"
    ),
    new Project(
        "Flip Search",
        "A click to search product demo for re-selling houses in the Bay Area.",
        logo_flip_search,
        "https://github.com/RexStrider/flipsearch",
        "https://flipsearch.herokuapp.com/main"
    ),
    new Project(
        "Crystals Collector",
        "A guessing game where you collect crystals to get points and try to reach the target number.",
        logo_crystals_collector,
        "https://github.com/RexStrider/Crystals-Collector",
        "https://rexstrider.github.io/Crystals-Collector"
    )
]

export default projects;