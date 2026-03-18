const daybreak = {
    slug: "daybreak",
    topId: "daybreak-top",
    bodyClass: "daybreak-page",

    intro: {
        caseTag: "Case Study",
        title: "Daybreak is a story-driven multiplayer horror game where players race to the finish line, making split-second decisions as they outpace the monster and outsmart their opponents.",
        meta: {
            role: [
                "Product Designer & Scrum Master",
            ],
            team: ["6 Designers", "3 Full-Stack Developers"],
            timeline: "8 Weeks",
            tools: ["Figma", "Illustrator", "Photoshop", "Jira", "Procreate"],
        },
    },

    navLogo: { src: "/images/daybreak-logo.png", alt: "Daybreak" },

    sections: [
        {
            id: "overview",
            title: "Overview",
            blocks: [
                { type: "tag", text: "The Project" },
                { type: "subheading", text: "A race against a monster. A battle against each other." },
                {
                    type: "paragraphs",
                    items: [
                        "Daybreak is a digital multiplayer board game where players race to the end of a linear board before an ENTITY — a monster — hunts them down. Players take turns rolling dice, playing cards, and sabotaging each other, all while the monster grows stronger with each passing cycle.",
                        "The game ends when the last player standing reaches safety — or when the ENTITY claims them all.",
                    ],
                },
                {type: "tag", text: "Problem"},
                { type: "subheading", text: "Most multiplayer games get picked up — and put down forever."},
                {
                    type: "paragraphs",
                    items: [
                        "Many multiplayer games suffer the same fate: an exciting first session, then abandonment once the gameplay becomes predictable. Without meaningful choices or real player interaction, there's nothing pulling people back.",
                    ],
                },
            ],
        },
        {
            id: "research",
            title: "Research",
            blocks: [
                {type: "tag", text: "CONCEPT IDEATION"},
                { type: "subheading", text: "Independent concepts first. Then the real conversation." },
                {
                    type: "paragraphs",
                    items: [
                        "To begin the project, each team member independently developed their own game concept.",
                        "Instead of brainstorming together immediately, this approach allowed every team member to explore ideas without being influenced by louder voices in the group.",
                        "Each concept was presented to the team and we voted on the idea we were most excited to pursue.",
                        "The concept we selected became Daybreak.",
                    ],
                },
                {type: "tag", text: "Competitive Analysis"},
                { type: "subheading", text: "What similar games get right — and where they all fall short." },
                {
                    type: "paragraphs",
                    items: [
                        "We analyzed existing multiplayer board and card games to understand where the market is, and where Daybreak could carve out a distinct experience.",
                    ],
                },
            ],
        },
        {
            id: "design",
            title: "Design",
            blocks: [
                { type: "subheading", text: "Early Gameplay Testing" },
                {
                    type: "paragraphs",
                    items: [
                        "Before moving into digital design, we created a paper prototype of the game.",
                        "Testing the prototype in person allowed us to evaluate:",
                    ],
                },
                {
                    type: "bullets",
                    items: [
                        "how players interacted with the card system",
                        "whether the rules were easy to understand",
                        "how the pacing of the game felt",
                    ],
                },
                {
                    type: "paragraphs",
                    items: ["This helped us refine the mechanics before development began."],
                },
                { type: "subheading", text: "Designing the Card System" },
                {
                    type: "paragraphs",
                    items: [
                        "A core mechanic of Daybreak is its card system.",
                        "Cards function as:",
                    ],
                },
                {
                    type: "bullets",
                    items: [
                        "Actions players can perform",
                        "Abilities players can activate",
                        "Currency used to pay for those abilities",
                    ],
                },
                {
                    type: "paragraphs",
                    items: [
                        "This creates a strategic layer where players must decide whether to spend cards or save them for future turns.",
                    ],
                },
                { type: "subheading", text: "Card Interaction Flow" },
                {
                    type: "paragraphs",
                    items: [
                        "I designed the UI flows for picking up and playing cards.",
                        "Players are limited to three actions per turn, and activating abilities requires spending other cards as currency.",
                        "The interface needed to clearly communicate:",
                    ],
                },
                {
                    type: "bullets",
                    items: [
                        "which cards could be played",
                        "how many cards were required to activate abilities",
                        "how many actions remained",
                    ],
                },
                {
                    type: "paragraphs",
                    items: [
                        "The goal was to keep the system strategic but easy to understand during gameplay.",
                    ],
                },
                { type: "subheading", text: "Gameplay Event: Wheel of Death" },
                {
                    type: "paragraphs",
                    items: [
                        "Another gameplay interaction I designed was the Wheel of Death, triggered when players land on dangerous spaces on the map.",
                        "The wheel introduces unpredictable outcomes and reinforces the horror atmosphere.",
                        "The UI needed to clearly communicate risk while maintaining suspense.",
                    ],
                },
                { type: "subheading", text: "Design Challenge: Designing for Multiplayer Clarity" },
                {
                    type: "paragraphs",
                    items: [
                        "The biggest design challenge was ensuring the interface remained clear in a multiplayer environment.",
                        "Players needed to quickly understand:",
                    ],
                },
                {
                    type: "bullets",
                    items: ["their available cards", "remaining actions", "gameplay events affecting them"],
                },
                {
                    type: "paragraphs",
                    items: [
                        "Balancing a dark horror aesthetic with readable UI required careful visual hierarchy and interaction feedback.",
                    ],
                },
            ],
        },
        {
            id: "final-product",
            title: "Final Product",
            blocks: [
                {
                    type: "paragraphs",
                    items: [
                        "The final result was a fully built multiplayer game prototype demonstrating the core gameplay mechanics and visual direction.",
                        "The game includes:",
                    ],
                },
                {
                    type: "bullets",
                    items: [
                        "a strategic card-based gameplay system",
                        "multiplayer sabotage mechanics",
                        "interactive events like the Wheel of Death",
                    ],
                },
                { type: "paragraphs", items: ["(Insert gameplay screenshots or playable link here)"] },
            ],
        },
        {
            id: "reflection",
            title: "Reflection",
            blocks: [
                {
                    type: "paragraphs",
                    items: [
                        "Halfway through development, we realized our original concept was too large in scope for the project timeline.",
                        "As a team, we pivoted to a simplified version of the game that could realistically be built within the timeframe.",
                        "This experience reinforced the importance of scoping and prioritization when designing collaborative products.",
                        "As Scrum Master, I helped guide the team through this shift by clarifying priorities and ensuring everyone stayed aligned.",
                    ],
                },
            ],
        },
    ],
};

export default daybreak;
