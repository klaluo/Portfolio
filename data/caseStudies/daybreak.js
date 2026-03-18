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
                        {
                            type: "paragraphs",
                            items: [
                                "Daybreak is a digital multiplayer board game where players race to the end of a linear board before an ENTITY — a monster — hunts them down. Players take turns rolling dice, playing cards, and sabotaging each other, all while the monster grows stronger with each passing cycle.",
                                "The game ends when the last player standing reaches safety — or when the ENTITY claims them all.",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "What I Contributed" },
                        { type: "subheading", text: "Wearing more than one hat." },
                        {
                            type: "bullets",
                            items: [
                                "Led UX strategy and player experience design",
                                "Facilitated team alignment as Scrum Master",
                                "Designed card deal and steal interaction flows",
                                "Created all card assets, the Wheel of Death, and game cursor",
                                "Proposed and drove the project pivot that saved the timeline",
                            ],
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
                                "Players needed to feel both strategic and reactive. Decisions had to matter. Every round needed to feel different from the last.",
                            ],
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
                                "This system gave players the agency to outpace the monster, disrupt opponents, and adapt their strategy in real time — making each round genuinely unpredictable and worth replaying.",
                            ],
                        },
                        {
                            type: "bullets",
                            items: [
                                "\"Mean\" Cards — offensive cards used against other players (Swap, Trap, Steal, Sabotage)",
                                "Action Cards — movement boosts and copy mechanics (Dash, Mirror, Fortune)",
                                "Passive Cards — auto-activate protection, no points required (Deny, That Was Close)",
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
                                "We initially moved forward with a selected concept, but early into development we realized it was too complex for our timeline and technical scope. I proposed simplifying the game while keeping the core storyline intact.",
                                "As a team, we aligned on this direction and pivoted the project. This allowed us to stay true to the original vision while building something more focused and achievable.",
                            ],
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
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Key Concerns from Survey" },
                        { type: "subheading", text: "What players said was breaking their experience." },
                        {
                            type: "bullets",
                            items: [
                                "Weak or inconsistent storytelling reduces immersion and player investment",
                                "Repetitive or grindy gameplay causes players to lose interest over time",
                                "Overly complex systems (e.g. resource management) become frustrating",
                                "Poorly designed UI makes it difficult to understand or enjoy the game",
                                "Difficulty is often unbalanced — too easy or too punishing",
                                "\"Quarterbacking\" in multiplayer reduces engagement for other players",
                                "Bugs, glitches, lag, and microtransactions significantly impact player experience",
                            ],
                        },
                    ],
                },
                {
                    type: "group",
                    blocks: [
                        { type: "tag", text: "Design Opportunities from Survey" },
                        { type: "subheading", text: "What players said would actually keep them playing." },
                        {
                            type: "bullets",
                            items: [
                                "Strong narrative design — build a cohesive story to increase immersion",
                                "Varied gameplay mechanics — introduce dynamic interactions to avoid repetition",
                                "Simplified resource systems — keep mechanics intuitive, not overwhelming",
                                "Clear & intuitive UI — interfaces that are easy to understand at a glance",
                                "Scalable difficulty — allow the game to adapt to different player skill levels",
                                "Balanced multiplayer systems — encourage equal participation, reduce dominance",
                                "Fair game design — avoid pay-to-win, focus on player experience",
                            ],
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
                                "This helped us refine the mechanics before development began.",
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
                            type: "bullets",
                            items: [
                                "Certain movement cards let players advance too quickly — winners were winning in half the expected time, making the ENTITY feel irrelevant. Fix: adjusted card point costs and movement values.",
                                "Too many sabotage cards in circulation created an unbalanced spiral — one player could be pushed back repeatedly. Fix: capped \"mean\" card distribution per deck.",
                                "Players didn't understand when the ENTITY would escalate stages — the monster felt unpredictable in a frustrating, not exciting, way. Fix: tied stages to checkpoint milestones, made visible on board.",
                                "The Deny passive card caused confusion — players weren't sure when they could play it. Fix: clarified passive auto-trigger in rules and added a UI tooltip.",
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
                                "A core mechanic of Daybreak is its card system. Cards function as actions players can perform, abilities players can activate, and currency used to pay for those abilities.",
                                "This creates a strategic layer where players must decide whether to spend cards or save them for future turns.",
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
                                "I designed the UI flows for picking up and playing cards.",
                                "Players are limited to three actions per turn, and activating abilities requires spending other cards as currency. The interface needed to clearly communicate which cards could be played, how many cards were required to activate abilities, and how many actions remained.",
                                "The goal was to keep the system strategic but easy to understand during gameplay.",
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
                                "The wheel introduces unpredictable outcomes and reinforces the horror atmosphere. The UI needed to clearly communicate risk while maintaining suspense.",
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
                                "Card Deal Flow — cost-gated card selection",
                                "Steal Flow — randomized card theft sequence",
                                "Card Assets — all three card type families",
                                "Wheel of Death — visual spin mechanic",
                                "Custom Game Cursor",
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