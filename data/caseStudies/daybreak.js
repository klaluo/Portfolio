const daybreak = {
    slug: "daybreak",
    topId: "daybreak-top",
    bodyClass: "daybreak-page",

    intro: {
        caseTag: "Case Study",
        title: "Daybreak is a story-driven multiplayer horror game where players race to the finish line, making split-second decisions as they outpace the monster and outsmart their opponents.",
        meta: {
            role: ["Product Designer & Scrum Master"],
            team: ["6 Designers", "3 Full-Stack Developers"],
            timeline: "8 Weeks",
            tools: ["Figma", "Illustrator", "Photoshop", "Jira", "Procreate"],
        },
    },

    navLogo: { src: "/images/daybreak-logo.png", alt: "Daybreak" },

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
                        /*
                         * NEW BLOCK TYPE: twoColumnContributions
                         * Renders a two-column layout:
                         *   left  → paragraphs (project description)
                         *   right → labelled bullet list (contributions)
                         * Component: src/components/blocks/TwoColumnContributions.jsx
                         */
                        {
                            type: "twoColumnContributions",
                            left: {
                                paragraphs: [
                                    "Daybreak is a digital multiplayer board game where players race to the end of a linear board before an ENTITY — a monster — hunts them down. Players take turns rolling dice, playing cards, and sabotaging each other, all while the monster grows stronger with each passing cycle.",
                                    "The game ends when the last player standing reaches safety — or when the ENTITY claims them all.",
                                ],
                            },
                            right: {
                                label: "What I Contributed",
                                bullets: [
                                    "Led UX strategy and player experience design",
                                    "Facilitated team alignment as Scrum Master",
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
                                "Many multiplayer games suffer the same fate: an exciting first session, then abandonment once the gameplay becomes predictable. Without meaningful choices or real player interaction, there's nothing pulling people back.",
                                "For Daybreak, the design challenge was specific: how do you create a game that stays engaging across multiple rounds while balancing competition, randomness, and player control — without the experience becoming overwhelming or unfair?",
                            ],
                        },
                        /*
                         * NEW BLOCK TYPE: quoteBlock
                         * Renders a pull quote — bordered left accent, large serif text.
                         * Component: src/components/blocks/QuoteBlock.jsx
                         */
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
                        /*
                         * UPGRADED BLOCK TYPE: cardGrid
                         * Existing CardGrid.jsx uses cards[].title + cards[].items
                         * Extended shape adds: label, accent (color), description
                         * Update CardGrid.jsx to render the top accent border + label + description
                         * Component: src/components/blocks/CardGrid.jsx
                         */
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
                        // Existing block type — concerns (red) vs opportunities (green) side by side
                        {
                            type: "findingsRow",
                            concerns: {
                                title: "Key Concerns",
                                items: [
                                    "Weak or inconsistent storytelling reduces immersion",
                                    "Repetitive or grindy gameplay causes players to lose interest",
                                    "Overly complex systems (e.g. resource management) frustrate players",
                                    "Poorly designed UI makes games hard to enjoy",
                                    "Difficulty is often unbalanced — too easy or too punishing",
                                    "\"Quarterbacking\" reduces engagement for other players",
                                    "Bugs, lag, and microtransactions are deal-breakers",
                                ],
                            },
                            solutions: {
                                title: "Design Opportunities",
                                items: [
                                    "**Strong narrative** to anchor player investment",
                                    "**Varied mechanics** that prevent repetition round-to-round",
                                    "**Intuitive UI** — clarity at a glance, no learning curve",
                                    "**Scalable difficulty** that adapts to player skill level",
                                    "**Balanced multiplayer** — equal participation, no dominance",
                                    "**Fair game design** — no pay-to-win, no time pressure",
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
                        /*
                         * NEW BLOCK TYPE: compTable
                         * Renders a comparison table with strength tags and gap descriptions.
                         * The last row with highlight: true renders with a distinct background
                         * to show Daybreak as the solution row.
                         * Component: src/components/blocks/CompTable.jsx
                         *
                         * Props shape:
                         *   columns: string[]           — header labels
                         *   rows: {
                         *     game: string
                         *     strengths: string[]       — rendered as small tag pills
                         *     gap: string               — plain text description
                         *     highlight?: boolean       — highlights the Daybreak row
                         *   }[]
                         */
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
                                "Two rounds of paper playtesting surfaced four critical balance issues before a single line of code was written.",
                            ],
                        },
                        /*
                         * NEW BLOCK TYPE: iterationCards
                         * Renders a 2×2 grid of problem → fix cards.
                         * Each card shows: problem (header), description (body), fix (highlighted footer tag).
                         * Component: src/components/blocks/IterationCards.jsx
                         *
                         * Props shape:
                         *   cards: {
                         *     problem: string      — card header (the issue found)
                         *     description: string  — what happened during testing
                         *     fix: string          — what we changed
                         *   }[]
                         */
                        {
                            type: "iterationCards",
                            cards: [
                                {
                                    problem: "Players advanced too quickly",
                                    description: "Certain movement cards let players win in half the expected time, making the ENTITY feel irrelevant.",
                                    fix: "Adjusted card point costs and movement values",
                                },
                                {
                                    problem: "Too many sabotage cards",
                                    description: "An unbalanced spiral emerged — one player could be pushed back repeatedly, making the experience punishing and unfun.",
                                    fix: "Capped \"mean\" card distribution per deck",
                                },
                                {
                                    problem: "Monster escalation was unclear",
                                    description: "Players didn't understand when the ENTITY would escalate stages. The monster felt unpredictable in a frustrating, not exciting, way.",
                                    fix: "Tied stages to checkpoint milestones, made visible on board",
                                },
                                {
                                    problem: "Deny card caused confusion",
                                    description: "Players weren't sure when they could play the Deny passive card or whether it needed to be activated manually.",
                                    fix: "Clarified passive auto-trigger in rules + added UI tooltip",
                                },
                            ],
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

                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Wireframes & Assets" },
                        { type: "subheading", text: "Designing for Multiplayer Clarity" },
                        {
                            type: "paragraphs",
                            items: [
                                "After paper prototyping, I moved into wireframing the two most complex player interactions: the card deal flow (players pay card points to choose which card to play) and the steal flow (a multi-step interaction with randomized resolution).",
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
                                "The final version of Daybreak brings together the card system, board mechanics, and monster escalation into a cohesive digital experience.",
                                "The final result was a fully built multiplayer game prototype demonstrating the core gameplay mechanics and visual direction.",
                            ],
                        },
                        {
                            type: "bullets",
                            items: [
                                "A strategic card-based gameplay system",
                                "Multiplayer sabotage mechanics",
                                "Interactive events like the Wheel of Death",
                                "An escalating monster that grows stronger as players progress",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Note" },
                        { type: "subheading", text: "A note on the trailer." },
                        {
                            type: "paragraphs",
                            items: [
                                "A game teaser/trailer was created separately by another team member and is not represented in this case study as my work. My focus was the UX flows, card system, and visual assets.",
                            ],
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
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Takeaway 01" },
                        { type: "subheading", text: "The pivot was the right call — and I'd make it sooner next time." },
                        {
                            type: "paragraphs",
                            items: [
                                "Scope creep is the silent killer of side projects and studio games alike. Recognizing that the original concept was too ambitious — and advocating for a focused alternative — was the most impactful design decision I made on this project.",
                                "As Scrum Master, I helped guide the team through this shift by clarifying priorities and ensuring everyone stayed aligned.",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Takeaway 02" },
                        { type: "subheading", text: "Paper prototyping isn't a shortcut. It's the fastest way to find real problems." },
                        {
                            type: "paragraphs",
                            items: [
                                "Two playtests with paper cards surfaced more balance issues than weeks of hypothetical design might have. The fastest path to insight is always making something tangible and putting it in front of people.",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Takeaway 03" },
                        { type: "subheading", text: "Balance is a systems problem, not a math problem." },
                        {
                            type: "paragraphs",
                            items: [
                                "The card balancing issues we discovered — too much movement, too many sabotage cards — weren't about the numbers being wrong. They were about how the systems interacted. Good game design (and good UX) means thinking in systems, not features.",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Takeaway 04" },
                        { type: "subheading", text: "Scrum Master and designer is a tension worth leaning into." },
                        {
                            type: "paragraphs",
                            items: [
                                "Playing both roles forced me to balance creative ambition with team feasibility. I had to say \"not in this sprint\" more than I wanted to — and the project was better for it. Constraints don't kill ideas. They focus them.",
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default daybreak;