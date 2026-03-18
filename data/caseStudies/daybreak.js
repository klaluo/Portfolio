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
                { type: "subheading", text: "About the Project" },
                {
                    type: "paragraphs",
                    items: [
                        "Daybreak is a multiplayer horror game where players must reach the end of a linear board while being chased by an advancing monster. Each turn, players roll, move, and use cards to gain advantages, disrupt others, or protect themselves.",
                        "What makes the experience unique is its flexibility. Every card can be used in multiple ways, allowing players to adapt their strategy in real time. Combined with player interaction and a persistent threat, each round unfolds differently.",
                    ],
                },
                { type: "subheading", text: "Key Insight" },
                {
                    type: "paragraphs",
                    items: [
                        "Multiplayer games require players to process information quickly.",
                        "If gameplay systems are confusing, players lose immersion and the experience breaks down.",
                        "For Daybreak, the challenge was designing a gameplay system that remained strategic, readable, and immersive during fast multiplayer gameplay.",
                    ],
                },
            ],
        },
        {
            id: "research",
            title: "Research",
            blocks: [
                { type: "subheading", text: "Concept Ideation" },
                {
                    type: "paragraphs",
                    items: [
                        "To begin the project, each team member independently developed their own game concept.",
                        "Instead of brainstorming together immediately, this approach allowed every team member to explore ideas without being influenced by louder voices in the group.",
                        "Each concept was presented to the team and we voted on the idea we were most excited to pursue.",
                        "The concept we selected became Daybreak.",
                    ],
                },
                { type: "subheading", text: "Competitive Analysis" },
                {
                    type: "paragraphs",
                    items: [
                        "We analyzed multiplayer and deception-based games such as:",
                    ],
                },
                { type: "bullets", items: ["Among Us", "Dead by Daylight"] },
                {
                    type: "paragraphs",
                    items: [
                        "This helped us understand:",
                    ],
                },
                {
                    type: "bullets",
                    items: [
                        "common mechanics used in deception-based gameplay",
                        "how tension and suspense are created",
                        "visual expectations within the genre",
                    ],
                },
                {
                    type: "paragraphs",
                    items: ["These insights helped guide our gameplay and interface design decisions."],
                },
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
            ],
        },
        {
            id: "design",
            title: "Design",
            blocks: [
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
