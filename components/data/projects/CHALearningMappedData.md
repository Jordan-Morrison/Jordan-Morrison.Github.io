---
title: CHA Data Map
techStack: ["Node.js", "JavaScript", "React", "HTML", "CSS"]
index: 20
images: [
    {
        url: /images/projects/CHADataMap/Zoomed.webp,
        altTxt: a screenshot of central Ontario on the CHA Data Map
    },
    {
        url: /images/projects/CHADataMap/Wide.webp,
        altTxt: a screenshot of North America on the CHA Data Map
    },
    {
        url: /images/projects/CHADataMap/Details.webp,
        altTxt: a screenshot showcasing the details panel on the CHA Data Map
    }
]
---

The [CHA Data Map](https://chalearning.github.io/mapped-data/) is an interactive geospatial visualization I developed for HealthCareCAN’s CHA Learning division to explore the geographic distribution of our learner registrations across Canada. Our registration data contained only postal codes, so I sourced a 73 MB Canadian postal code dataset containing geographic coordinates to make mapping possible. A custom Node.js script processed the large CSV files, matched learner registrations to their coordinates and transformed the results into usable JSON. The resulting data was imported into Kepler.gl to create the interactive visualization, then exported for the web and deployed through GitHub Pages.