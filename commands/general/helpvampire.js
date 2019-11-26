module.exports = {
    name: "helpvampire",
    category: "general",
    description: "Opens a website",
    run: async (client, message, args) => {
        try {
            const rm = require('discord.js-reaction-menu');
            const Discord = require('discord.js');
            var color_red = 16711710;
            
            new rm.menu(message.channel, message.author.id, [
                
                // ========== PAGE 1 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                .addField("**Introduction**", "Help Vampires are found in every public online community. \
                 Instead of consuming ill-gotten hemoglobin, these vampires suck the very life and energy out of people. \
                 By nature they feed on generous individuals who tend towards helping others, and leave their victims exhausted, bitter and dispirited. \
                 They're not evil creatures, Help Vampires. They act only on their blind instinct to feed, driven by base urges like most living things. \
                 Often even they themselves are not aware of their Help Vampire status, so leave your stakes at home. \n\n\
                 In light of these facts, I will provide information on reforming / re-education Help Vampires in addition to outfitting you with \
                 information on identifying and tracking them. If in the course of events you discover that you yourself are a Help Vampire, \
                 you will learn how to control your vampiric ways.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 1/6'),

                // ========== PAGE 2 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                //.setThumbnail('https://media.discordapp.net/attachments/494612992093192212/648519933201874954/helpvampire.png')
                .addField("**Identifying Help Vampires**", "Identifying Help Vampires can be tricky, because they look like any ordinary person \
                (or internet user, whichever is lesser).")
                .addField("But by closely observing an individual’s behavior using this handy checklist, you too can identify Help Vampires in the field:", "\
                • Does he ask the same, tired questions others ask (at a rate of once or more per minute)? \n\
                • Does he clearly lack the ability or inclination to ask the almighty Google? \n\
                • Does he refuse to take the time to ask coherent, specific questions? \n\
                • Does he think helping him must be the high point of your day? \n\
                • Does he get offensive, as if you need to prove to him why he should use Ruby on Rails \n\
                • Is he obviously just waiting for some poor, well-intentioned person to do all their thinking for him? \n\
                • Can you tell he really isn’t interested in having his question answered, so much as getting someone else to do his work?")
                .addField("Note", "> Note that I use ‘he’ here in the general sense even though Help Vampires are almost exclusively male. \
                It appears that male Help Vampire, drawn as it is to shiny technology, occupies an evolutionary niche that females of the \
                species simply do not find desirable.\
                Another key indicator for Help Vampires is the clearly stated but “impossible” question. These questions look reasonable on the \
                surface, but in fact they are impossible to answer for a number of reasons. These questions include, for example, \
                “How do I build a forum?” or “How can I make a chat site?”")
                .addField("Their purpose is threefold:", "\
                • First, to identify a victim foolish enough to attempt to answer the impossible question \n\
                • Second, to distract the victim long enough to separate him from his fellows\n\
                • Lastly, to befuddle the victim’s brain while their soul is being removed through the abdominal cavity by way of a standard-issue Bendy Straw \
                This is autonomous behavior. Again, we shouldn’t hate the Help Vampire. Or stake them. They know not what they do, only that they are driven to do it, and I believe they can be saved.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 2/6'),

                // ========== PAGE 3 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                .addField("**Signs of Help Vampire Infestation**", "The chief indicator of a Help Vampire problem is the lack of helpfulness—the \
                community may still appear to be bustling and lively, but if on closer inspection the conversation is all towards the shallow end of \
                the pool, with moderately difficult questions going unanswered, then a Help Vampire infestation is likely.")
                .addField("Transitory", "Help Vampires are transitory. They move into a community—as soon as they sense its vibrancy and intelligence. \
                Often they leave (“give up,” in their eyes) when they have exhausted all the resources, leaving the community itself drained and adrift.")
                .addField("Behaviour", "This behavior incurs a secondary effect which further cripples the community, and persists even after the Help \
                Vampire problem has passed. Often the “best and brightest,” sensing the outflux of decent conversation, retreat into Walled Garden \
                communities which the Help Vampire can rarely penetrate. In this way the individuals are sheltered from the painful effects of Help \
                Vampire attacks, but they also make themselves inaccessible to non-Help Vampire users as well. This effect can be the last straw that \
                leaves the community devoid of experts and utterly without hope.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 3/6'),

                // ========== PAGE 4 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                .addField("**If You’re a Help Vampire…**", "Now you know. Stop. Of course, it’s not just that easy, or nobody would ever be a Help Vampire at all. \
                Before you ask a question in a community, try to find the answer elsewhere. This way you help yourself by stretching your mind and \
                research abilities, and you learn things more thoroughly too. Plus it’s good karma.")
                .addField("1. **Keep troubleshooting**", "Often we learn that it’s easier to give up and ask for help rather than persisting—when we’d \
                get our breakthrough if we’d only delay giving up for another 10 minutes. Respect yourself, go a little further before giving up.")
                .addField("2. **Google**", "Google partial error messages, add software names to your queries, and generally try at least 3 or 4 \
                searches before you give it up as hopeless.")
                .addField("3. **Mailing lists, forums, and newsgroups**", "Chances are, you’re not the first person on the Earth to have this problem. \
                Luckily we live in an age where we can search the past. Check out these resources next.")
                .addField("4. **Docs**", "Sometimes they seem impenetrable, but give it a whack. The more you learn, the easier the documentation will \
                be to understand and decipher.")
                .addField("5. **Ask your question—but phrase it differently**", "Instead of asking your question directly, ask \
                “Has anyone has seen this problem?” or “Can anyone point me in the right direction?” Likely as not, someone will have been there before, \
                and they might know a blog posting or other resource which can help you out. This way, you show you are respectful of their time, and \
                understand your problem is (probably) not unique.")
                .addField("Asking questions", "When you do ask a question, try to provide as much background detail as possible. Ask yourself these \
                questions first, so that others don’t have to: \n\n\
                • What version of the software are you running? \n\
                • What’s your operating system? \n\
                • What exactly are you trying to do that won’t work? \n\
                • Is the problem uniform or erratic? \n\
                • What’s the exact error message? \n\
                • When did it arise? \n\
                • What exactly don’t you “get”?")
                .addField("Have your things ready", "Have code samples at the ready when possible—and when you’re talking on an IRC channel, \
                put your code samples on a pastebin. If you’re posting code from separate parts of a project, label them with comments. \
                Provide a little bit of a flow description to help familiarize people who don’t know your code from a hole in the ground.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 4/6'),

                // ========== PAGE 5 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                .addField("**Reforming the Help Vampire (e.g. Not You)**", "You’ll get good results by following this action plan for solving your community’s Help Vampire problem: \n\n\
                    1. Create resources for Help Vampires (and regular folks) to help themselves. \n\
                    2. Cease all behavior which enables Help Vampires’ vampy behavior. \n\
                    3. Meet Help Vampires head-on. \n\n\
                    As you can see, none of these steps endorse violence. There are no stakes, kickboxing moves, or sneaky little ampules of holy water—although witty repartee may be involved.")
                .addField("#1: Creating Resources", "If your community’s resources are spread over all the web, not organized or indexed, \
                and generally harder to navigate than a rat’s nest, then creating a solid help resource should significantly cut down Help Vampire activity. \n\n\
                At the minimum, create a well-organized, preferably community-edited page which clearly lists the following:")
                .addField("A FAQ", "A FAQ—with real Frequently Asked Questions, not ones which just sound likely. And with clearly phrased, actionable (urgh) information for each question.")
                .addField("Up-to-date list of errors or pitfalls", "An up-to-date list of errors or pitfalls one is likely to encounter in the current version of the software")
                .addField("List of useful resources", "Ideally organized by topic (e.g. “Installing,” “Deployment,” “Third-Party Add-ons,” “Beginner’s Tutorials,” “Advanced Tutorials,” etc.)")
                .addField("Some very simple community guidelines", "Most people (and even Help Vampires) will behave appropriately, if they only know what appropriately is.")
                .addField("Ressources page", "Ideally the Resources page should be just that: a single page. This makes finding information easy and doesn’t require a search engine. \n\n\
                > Be nice! A condescending or cruel tone in Resources page will be very counter-productive.")
                .addBlankField()
                .addField("#2: Cease Enabling Behavior", "Secondly, you must rid the community of anything which enables Help Vampires to keep being Help Vampires.")
                .addField("Enforce autonomy", "No matter how beneficent you’re feeling, never directly answer a common question. \
                This is the lazy way out, and you only enable the Help Vampires instead of truly helping them. \
                Let the URL to your help resources be your only answer, but tell the vamp you are happy to help if he explores those avenues of \
                self-help and still cannot find an answer.")
                .addField("Foster thinking", "Even if it’s not a question you see go bye fifty times a day… don’t answer it with a direct fix \
                (unless the person is a known non-vamp, or it’s a real puzzler). Answer with questions to spur (and guide) thought. \
                If the Help Vampire resists thinking or complains, give them the URL for the Resources page and withhold further assistance.")
                .addField("Reward self-help and helping others", "Thank people who ask intelligent questions and do research first, \
                and people who make an effort to help others. Tell them they’re a credit to the community. \
                Be especially generous with praise and emoticons for those who are actively reforming their ways. Help is a trickle-down economy.")
                .addField("Be friendly", "People and Help Vampires are much more likely to become useful members of the community if they’re met \
                with kindness and encouragement rather than condescension and spite. They may seem like nothing but one more in a long strain of \
                know-nothings, but you stand out very distinctly to them.")
                .addBlankField()
                .addField("#3: Meet Help Vampires Head-On", "And lastly, address the problem directly.")
                .addField("“You’re a Help Vampire.”", "Call a spade a spade, and a Help Vampire a Help Vampire. \
                Tell the vamp you’ll be glad to have him as a member of your community if he reforms his vampy ways. \
                And inform him what vampy ways you’re talking about (this page is a good way to do that).")
                .addField("Be gentle, but firm", "There’s no reason to yell at a Help Vampire, because they can’t help what they are until \
                they know what they are. Being cruel to a vamp is like baiting wild animals. Just continue calmly applying the techniques \
                found under #2, even if the Help Vampire becomes recalcitrant or angry.")
                .addField("Weed out hopeless cases", "There’s a small subset of Help Vampires who feel entitled to your entire attention, \
                and have no interest in fulfilling any of your needs. If you’ve been calm, exercised all the other techniques, and simply ignored \
                the vamp, and still there is no change in his behavior… just eject him from the community. This means he won’t be interrupting any \
                other exchanges in the future.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 5/6'),

                // ========== PAGE 6 ========== //
                new Discord.RichEmbed()
                .setColor(color_red)
                .setTitle("The Help Vampire:")
                .setDescription('A Spotter\'s Guide')
                .setURL('http://slash7.com/2006/12/22/vampires/')
                .setAuthor('Author: Amy Hoy', 'https://web.archive.org/web/20181124221026/https://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm')
                .addField("**Outlook Positive**", "I felt the need to write this because I think that people are basically good, \
                and basically self-sufficient in the right circumstances. If we can only make it easy for people to be good, and show them we \
                mean business, we can change the world—or at least our small section of it.")
                .setTimestamp()
                .setFooter('The Help Vampire: Spotter\'s Guide - By: Amy Hoy - Page 6/6'),

            ]);
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}