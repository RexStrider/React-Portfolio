import logo_study_live from '../Assets/Images/study_live.png';
import logo_flip_search from '../Assets/Images/flip_search.png';
import logo_parent_maps from '../Assets/Images/parent_maps.png';
import logo_crystals_collector from '../Assets/Images/crystals_collector.png'

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
    new Project(
        "Parent Maps",
        "A community based database where parents can post reviews on various places.",
        logo_parent_maps,
        "https://github.com/RexStrider/berkeleyfamilyfriendly",
        "https://gtresquire.github.io/berkeleyfamilyfriendly/"
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
        "A guessing game where you collect the crystals to get points and try to reach the target number.",
        logo_crystals_collector,
        "https://github.com/RexStrider/Crystals-Collector",
        "https://rexstrider.github.io/Crystals-Collector"
    )
]

export default projects;