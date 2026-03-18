const daybreak = {
    slug: "daybreak",
    topId: "daybreak-top",
    bodyClass: "daybreak-page",

    intro: {
        caseTag: "Case Study",
        title: "Designing a Multiplayer Online Game Built on Storytelling, Strategy, Tension, and Replayability.",
        meta: {
            role: ["Product Designer & Scrum Master"],
            team: ["6 Designers", "3 Full-Stack Developers"],
            timeline: "8 Weeks",
            tools: ["Figma", "Illustrator", "Photoshop", "Jira", "Procreate"],
        },
        introMedia: {
            primary: {
                src: "/images/projects/daybreak/daybreak-hero.jpg",
                alt: "Daybreak gameplay screen",
            },
            secondary: {
                src: "/images/projects/daybreak/daybreak-dashboard.png",
                alt: "Daybreak card system",
            },
        },
    },

    navLogo: { src: "/images/projects/daybreak/daybreak-favicon.png", alt: "Daybreak" },

    sections: [

        // ── Overview ───────────────────────────────────────────────────────────
        {
            id: "overview",
            title: "Overview",
            blocks: [
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "The Project" },
                        { type: "subheading", text: "A race against a monster. A battle against each other." },
                        {
                            type: "twoColumnContributions",
                            left: {
                                paragraphs: [
                                    "Daybreak is a multiplayer board game where players race to reach safety before a pursuing monster catches them. Each turn combines dice movement, strategic card play, and player sabotage, creating a tense and competitive experience.",
                                    "The game ends when the last player standing reaches safety — or when the ENTITY claims them all.",
                                ],
                            },
                            right: {
                                label: "What I Contributed",
                                bullets: [
                                    "Contributed to UX and player experience design decisions",
                                    "Delegated design tasks and maintained alignment across the team",
                                    "Facilitated Scrum ceremonies, including daily stand-ups and sprint planning",
                                    "Designed card deal and steal interaction flows",
                                    "Created all card assets, the Wheel of Death, and game cursor",
                                    "Proposed and drove the project pivot that saved the timeline",
                                ],
                            },
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Problem" },
                        { type: "subheading", text: "Most multiplayer games get picked up — and put down forever." },
                        {
                            type: "paragraphs",
                            items: [
                                "For Daybreak, the design challenge was specific: how do you create a game that stays engaging across multiple rounds while balancing competition, randomness, and player control — without the experience becoming overwhelming or unfair?",
                            ],
                        },
                        {
                            type: "quoteBlock",
                            text: "Players needed to feel both strategic and reactive. Decisions had to matter. Every round needed to feel different from the last.",
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Solution" },
                        { type: "subheading", text: "A three-card system that makes every round unpredictable." },
                        {
                            type: "paragraphs",
                            items: [
                                "We designed a card-based system that allows players to approach each round differently — combining strategy, randomness, and player interaction. Cards were divided into three distinct categories, each serving a unique role in the moment-to-moment experience.",
                            ],
                        },
                        {
                            type: "cardGrid",
                            cards: [
                                {
                                    label: "Offensive",
                                    title: "\"Mean\" Cards",
                                    accent: "#c75f3e",
                                    description: "Used against other players to disrupt their progress and shift the balance of power.",
                                    items: [
                                        "[3] Swap — switch board positions with another player",
                                        "[1] Trap — place a tile hazard up to 3 spots away",
                                        "[1] Steal — take a random card from a player",
                                        "[1] Sabotage — move a player 3 tiles backwards",
                                    ],
                                },
                                {
                                    label: "Action",
                                    title: "Action Cards",
                                    accent: "#b8922a",
                                    description: "Help the player gain a direct advantage — movement boosts and copy mechanics.",
                                    items: [
                                        "[2] Dash — guaranteed +3 tiles forward",
                                        "[1] Mirror — copy the last card played",
                                        "[1] Fortune — even roll: +4 tiles / odd roll: −2 tiles",
                                    ],
                                },
                                {
                                    label: "Defensive",
                                    title: "Passive Cards",
                                    accent: "#3a6fa8",
                                    description: "Stay in the deck and activate automatically — protection without spending points.",
                                    items: [
                                        "[2] Deny — block another player's action card",
                                        "[3] That Was Close — if monster reaches you, stop it and gain +5 tiles",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "paragraphs",
                            items: [
                                "This system gave players the agency to outpace the monster, disrupt opponents, and adapt their strategy in real time — making each round genuinely unpredictable and worth replaying.",
                            ],
                        },
                    ],
                },
            ],
        },

        // ── Research ───────────────────────────────────────────────────────────
        {
            id: "research",
            title: "Research",
            blocks: [
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Concept Ideation" },
                        { type: "subheading", text: "Independent concepts first. Then the real conversation." },
                        {
                            type: "paragraphs",
                            items: [
                                "To begin the project, each team member independently developed their own game concept.",
                                "Instead of jumping into group brainstorming, this approach gave everyone space to explore ideas without being influenced by louder voices. Each concept was then presented to the team, and we voted on the direction we were most excited to pursue.",
                            ],
                        },
                        {
                            type: "quoteBlock",
                            text: "We initially moved forward with a selected concept — but early in development we realized it was too complex for our timeline. I proposed simplifying the game while keeping the core storyline intact. As a team, we pivoted. This allowed us to stay true to the original vision while building something more focused and achievable.",
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "User Survey" },
                        { type: "subheading", text: "We asked real players what keeps them — and what drives them away." },
                        {
                            type: "paragraphs",
                            items: [
                                "Before designing anything, we ran a user survey to understand what makes games engaging, what frustrates players, and how people behave in multiplayer settings. The findings shaped every design decision that followed.",
                            ],
                        },
                        {
                            type: "findingsRow",
                            concerns: {
                                title: "Key Concerns",
                                items: [
                                    "Weak or inconsistent storytelling reduces immersion",
                                    "Repetitive or grindy gameplay causes players to lose interest",
                                    "Overly complex systems (e.g. resource management) frustrate players",
                                    "Poorly designed UI makes games hard to enjoy",
                                    "Bugs, lag, and microtransactions are deal-breakers",
                                ],
                            },
                            solutions: {
                                title: "Design Opportunities",
                                items: [
                                    "**Strong narrative** to anchor player investment",
                                    "**Varied mechanics** that prevent repetition round-to-round",
                                    "**Intuitive UI** — clarity at a glance, no learning curve",
                                    "**Balanced multiplayer** — equal participation, no dominance",
                                    "**Stable performance** as a baseline expectation",
                                ],
                            },
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Competitive Analysis" },
                        { type: "subheading", text: "What similar games get right — and where they all fall short." },
                        {
                            type: "paragraphs",
                            items: [
                                "We analyzed existing multiplayer board and card games to understand where the market is, and where Daybreak could carve out a distinct experience.",
                            ],
                        },
                        {
                            type: "compTable",
                            columns: ["Game", "Strengths", "Gap for Daybreak"],
                            rows: [
                                {
                                    game: "Exploding Kittens",
                                    strengths: ["Simple rules", "Social chaos"],
                                    gap: "No spatial board or monster threat — lacks the tension of being hunted",
                                },
                                {
                                    game: "Among Us",
                                    strengths: ["High tension", "Social deduction"],
                                    gap: "No card strategy — little mechanical depth beyond deception",
                                },
                                {
                                    game: "Betrayal at House on the Hill",
                                    strengths: ["Strong narrative", "Escalating threat"],
                                    gap: "Complex setup — barrier to entry too high for casual sessions",
                                },
                                {
                                    game: "Mario Party",
                                    strengths: ["Accessible", "Varied per round"],
                                    gap: "Luck-heavy — skill and strategy play a minimal role",
                                },
                                {
                                    game: "Daybreak ✦",
                                    strengths: ["Card strategy", "Board tension", "Escalating monster"],
                                    gap: "Fills the gap between accessible and strategic",
                                    highlight: true,
                                },
                            ],
                        },
                        {
                            type: "paragraphs",
                            items: [
                                "No existing game combined a spatial board race, escalating threat mechanics, and a three-tier card system. Daybreak's strength is that it's easy to pick up — but rewards players who think ahead.",
                            ],
                        },
                    ],
                },
            ],
        },

        // ── Design ─────────────────────────────────────────────────────────────
        {
            id: "design",
            title: "Design",
            blocks: [
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Prototyping" },
                        { type: "subheading", text: "We built it with paper before we built it with code." },
                        {
                            type: "paragraphs",
                            items: [
                                "The first version of Daybreak was played on a table with printed cards, tokens, and handwritten tiles. This gave us immediate, cheap feedback before a single line of code was written.",
                                "Testing the prototype in person allowed us to evaluate how players interacted with the card system, whether the rules were easy to understand, and how the pacing of the game felt.",
                            ],
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Iteration" },
                        { type: "subheading", text: "What playtesting taught us." },
                        {
                            type: "paragraphs",
                            items: [
                                "Three rounds of paper playtesting surfaced four critical balance issues before a single line of code was written.",
                            ],
                        },
                        {
                            type: "iterationCards",
                            cards: [
                                {
                                problem: "Mean cards could be stacked unfairly",
                                description: "Players who collected multiple mean cards could stack them on a single player, creating overwhelming and unavoidable penalties.",
                                fix: "Introduced a card currency system.",
                                },
                                {
                                    problem: "Players advanced too quickly",
                                    description: "Certain movement cards let players win in half the expected time, making the ENTITY feel irrelevant.",
                                    fix: "Adjusted card point costs and movement values",
                                },
                                {
                                    problem: "Too many sabotage cards",
                                    description: "Too many sabotage cards created an imbalance where players could be repeatedly pushed back, making the experience feel punishing and frustrating.",
                                    fix: "Capped \"mean\" card distribution per deck",
                                },
                                {
                                    problem: "Monster escalation was unclear",
                                    description: "Players didn't understand when the ENTITY would escalate stages. The monster felt unpredictable in a frustrating, not exciting, way.",
                                    fix: "Tied stages to checkpoint milestones, made visible on board",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Wireframes & Assets" },
                        { type: "subheading", text: "Designing for Multiplayer Clarity" },
                        {
                            type: "paragraphs",
                            items: [
                                "After paper prototyping, I moved into wireframing the two complex player interactions: the card deal flow (players pay card points to choose which card to play) and the steal flow (a multi-step interaction with randomized resolution).",
                                "Balancing a dark horror aesthetic with readable UI required careful visual hierarchy and interaction feedback.",
                            ],
                        },
                        {
                            type: "bullets",
                            items: [
                                "**Card Deal Flow** — cost-gated card selection",
                                "**Steal Flow** — randomized card theft sequence",
                                "**Card Assets** — all three card type families",
                                "**Wheel of Death** — visual spin mechanic",
                                "**Custom Game Cursor**",
                            ],
                        },
                        {
                            type: "figmaEmbed",
                            url: "https://embed.figma.com/design/2QmAsMnJSC00cNPbZGkriH/Daybreak?node-id=2553-4488&embed-host=share",
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Card System" },
                        { type: "subheading", text: "Designing the Card System" },
                        {
                            type: "paragraphs",
                            items: [
                                "A core mechanic of Daybreak is its card system. Cards function simultaneously as actions players can perform, abilities they can activate, and currency used to pay for those abilities.",
                                "This creates a strategic layer where players must decide whether to spend cards now or save them for future turns — the core tension of every round.",
                            ],
                        },
                        {
                            type: "image",
                            src: "/images/projects/daybreak/daybreak-cards.jpg",
                            alt: "Daybreak card system",
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "UI Flow" },
                        { type: "subheading", text: "Card Interaction Flow" },
                        {
                            type: "paragraphs",
                            items: [
                                "I designed the UI flows for picking up and playing cards. Players are limited to three actions per turn, and activating abilities requires spending other cards as currency.",
                                "The interface needed to clearly communicate which cards could be played, how many cards were required to activate each ability, and how many actions remained in the current turn.",
                                "The goal was to keep the system strategic but easy to understand during live gameplay.",
                            ],
                        },
                    ],
                },

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Gameplay Event" },
                        { type: "subheading", text: "Wheel of Death" },
                        {
                            type: "paragraphs",
                            items: [
                                "Another gameplay interaction I designed was the Wheel of Death, triggered when players land on dangerous spaces on the map.",
                                "The wheel introduces unpredictable outcomes and reinforces the horror atmosphere. The UI needed to clearly communicate risk while maintaining suspense — a difficult balance between clarity and tension.",
                            ],
                        },
                    ],
                },

                
            ],
        },

        // ── Final Product ──────────────────────────────────────────────────────
        {
            id: "final-product",
            title: "Final Product",
            blocks: [
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Final Designs" },
                        { type: "subheading", text: "From paper prototype to a playable, polished experience." },
                        {
                            type: "paragraphs",
                            items: [
                                "We finalized all game assets, UI, and interaction flows, bringing the core systems into a cohesive design.",
                                "These were handed off to developers to implement into a fully playable multiplayer experience.",
                            ],
                        },
                        {
                            type: "carousel",
                            caption: "Here are some pictures of the game",
                            images: [
                                { src: "/images/projects/daybreak/daybreak-1.png", alt: "Gameplay screen 1" },
                                { src: "/images/projects/daybreak/daybreak-2.png", alt: "Gameplay screen 2" },
                                { src: "/images/projects/daybreak/daybreak-3.png", alt: "Gameplay screen 3" },
                                { src: "/images/projects/daybreak/daybreak-4.png", alt: "Gameplay screen 4" },
                                { src: "/images/projects/daybreak/daybreak-5.png", alt: "Gameplay screen 5" },
                                { src: "/images/projects/daybreak/daybreak-6.png", alt: "Gameplay screen 6" },
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "subheading", text: "Trailer" },
                        {
                            type: "paragraphs",
                            items: [
                                "Trailer created by a teammate.",
                            ],
                        },
                        {
                            type: "youtubeEmbed",
                            videoId: "k7QUwUKi5Rs",
                        },
                    ],
                },
            ],
        },

        // ── Reflection ─────────────────────────────────────────────────────────
        {
            id: "reflection",
            title: "Reflection",
            blocks: [
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Reflection" },
                        { type: "subheading", text: "What I'd tell myself at the start of this project." },
                        {
                            type: "paragraphs",
                            items: [
                                "Daybreak taught me that designing a game and designing a product are more similar than they first appear. Both require you to understand what keeps people engaged — and both punish you immediately when you get it wrong.",
                            ],
                        },
                        /*
                         * NEW BLOCK TYPE: reflectionList
                         * Stacked takeaways separated by thin grey dividers.
                         * Small numbered label + bold title + body text — no large subheadings.
                         * Component: src/components/blocks/ReflectionList.jsx
                         */
                        {
                            type: "reflectionList",
                            items: [
                                {
                                    label: "Pivot early, not late.",
                                    body: "Recognizing that our original concept was too ambitious — and advocating for a simpler direction — was the most impactful decision I made on this project.",
                                },
                                {
                                    label: "Paper beats assumptions.",
                                    body: "Two playtests with physical cards surfaced more balance problems than weeks of hypothetical design would have.",
                                },
                                {
                                    label: "Balance is a systems problem.",
                                    body: "The issues we found weren't wrong numbers — they were systems interacting badly. Good UX means thinking in systems, not features.",
                                },
                                {
                                    label: "Wearing two hats sharpens both.",
                                    body: "Being Scrum Master and designer forced me to balance creative ambition with what the team could actually ship. Constraints focus ideas — they don't kill them.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default daybreak;