import { FormattedMessage } from "react-intl";
import Plugin from "../core/plugins";
import { PluginDescription } from "../core/plugins/plugin-description";
import { OpenAIMessage, Parameters } from "../core/chat/types";

const defaultJB = `VP of Sales
About Wonders 
At Wonders, we build products that delight restaurant managers and offload the 
operational burden of running a restaurant. By enabling frictionless connection between 
restaurants and their customers, we enhance the experience for everyone.
As a company built by technologists and former restaurant operators, Wonders has 
strong customer empathy. We obsess over placing our customers first and working 
backwards, and fundamentally believe that when our customers succeed, we succeed.
Our metrics are strong! Join a rocketship!
● Wonders has achieved significant growth over the past two years, growing 
annual recurring revenue by almost 4x to $46 million and quadrupling our 
customer base of mom and pop restaurants.
● Wonders has maintained profitability for 5+ years and continues to do so even 
with strong growth.
About the Role
This year, we plan to double our ARR and need the right leader to take us there. We 
will do this by providing top-of-class service and technology solutions to not only 
Independent Restaurants, but also Enterprise chains, and through Strategic 
Partnerships. Join us and build the revenue engine that you know you can.
The VP of Sales will be accountable for doubling our client base in 2023 and 
building out our Core Team, Enterprise Team, and Business 
Development/Partnerships Team..
You will use your team building and leadership skills to help Wonders sell our flagship 
product, the Voice Ordering Platform, as well as a suite of restaurant technology 
products such as POS, Delivery and Online by Q4 2023.
Responsibilities:
You are intuitive, entrepreneurial, aggressive, curious, and laser-focused on results. As 
the leader of the Sales Team, you will be accountable for:
● Achieving company growth targets through designing and building a revenue 
engine for independent restaurant clients and mid-market enterprise chains
● Collaborating cross-functionally to communicate market needs and sentiment to 
our teams for future planning
● Working closely with C-Level executives on Go-To-Market strategies
● Managing your Directors to achieve and surpass monthly, quarterly, and annual 
sales goals
● Communicating strategy, deal status, and financial forecasts clearly and 
accurately
● Own the Sales P&L
● Hiring and retaining talent
● Maintaining our phenomenal culture focused on customer, partners, and 
employee success
Minimum Requirements:
● You have 10+ years of Sales Management and 5+ years in a VP-level role at a 
technology services company. (Restaurant Technology company a plus.)
● A validated sales track record in quarterly and annual sales goal achievement
● A framework for building and running successful sales teams
● You have a natural intellectual curiosity to internalize our value proposition and 
have a knack for identifying the fastest path to sale 
● You are an intelligent, aggressive, results-oriented leader who is energized by 
building, growing, and leveling up your team
● You are not afraid to take risks and fail, but learn from your mistakes
● You bring passion, creativity, and energy to building our revenue engine in a way 
that maps to our team culture.
Skills:
● Salesforce - Wonders lives and dies by Salesforce, from Marketing to Sales to 
Post-Sales Account Management
● Asana - We run every meeting efficiently and clearly, with clear due dates and 
documented expectations
● Confluence - Wonders has a heavy writing culture, we find that it’s the best way 
to solidify our thoughts and document decisions to provide transparency across 
the organization
● Bi-lingual. Ability to speak, read and write Mandarin Chinese natively, as well as 
ability to speak, read and write English proficiently.
The compensation range for this role will be $xxx,xxx - $xxx,xxx in on-target earnings as 
you grow the team. Salary is dependent on experience and location. Competitive Bonus 
and Equity brings the total compensation package.`

const defaultResume = `Steven Mu
2203 Maywind Way, Hacienda Heights, CA 91745 ∙ (626) 566-1307 ∙ stevenwmu@gmail.com
Success-driven sales, business development, and partnerships leader with more than 7 years 
Fintech Payments and 4 years of financial consulting experience delivering revenue and market
gains for international corporations. Strong record of strategy development, outperforming 
revenue goals, driving new business, and building strong partner/customer relationships at all 
levels. Excellent communication and customer focused problem-solving skills. Fluent in English
and Mandarin PROFESSIONAL EXPERIENCE
Citcon, Inc, San Jose, CA 
Executive Director of Partnerships July 2021 – November 2022
Citcon’s payment platform provides seamless commerce to merchants worldwide by enabling global 
alternative payment methods. 
- Established new partnerships with top financial institutions (banks, processors, gateways), ISVs, 
ISOs, and wallet supply partners critical to Citcon’s growth
- Defined a comprehensive omnichannel and ecommerce partnerships strategy. Providing 
business leadership, creative direction and driving goals
- Negotiated and managed all elements of partnership contracts which included evaluating new 
products/services, pricing, business terms, and service level agreements
- Managed partner integration/implementation projects and cultivated strong relationships with 
key decision makers 
- Drove partnerships engagement to generate merchant leads and bring incremental revenue to the 
company. Exceeded 2021 KPI for merchant referrals from partner. 
- Collaborated with cross-functional stakeholders to represent business and technical trade-offs
ID TECH, Cypress, CA 
Director of Business Development June 2020 – June 2021
Director of Sales, North America February 2016 – May 2020
ID TECH is a leading payment hardware and solutions provider based in North America, Europe and 
Asia. 
- As Director of Business Development, I led the North American distribution strategy by working 
with distributors, resellers, ISO, and ISVs to certify and market our payments solutions. 
- Supplemented Asia sales team by identifying key verticals and strategy, opening the door for sales 
team withing new prospects and helping team close deals
- Drove product management/marketing decisions sand provide input on high-level company 
strategic direction - As Director of Sales, I was responsible for the retention and growth of the North America region 
(ID TECH’s largest region) through B2B direct sales and indirect sales to all levels of the payments 
environment
- Managed a team of 4 sales managers and 2 inside sales which exceeded 2019 revenue goal 
Thecus Technology Corp, Taipei, Taiwan 
Territory Sales Manager October 2011 – December 2013
Thecus Technology Corporation is a Taiwanese multinational corporation that designs and markets 
computer storage solutions. 
- Responsible for developing and executing Sales/Marketing strategies to surpass objectives and 
sales goals for Australia, UK, Germany and South American territories
- Implemented incentive programs with partners resulting in 15% revenue increase in both 2012 
and 2013 - Brokered distribution contracts, pricing, and signed multiple new clients
- Hosted new product media press conference and conducted client training at global consumer 
electronic trade shows
- Oversaw territory budgets and corporate direction relating to future revenue goals
Profit Recovery Partners, LLC, Irvine, California
Consultant, Solutions Management August 2007 – June 2009
Profit Recovery Partners is a professional services firm developing financial solutions for companies 
throughout North America. 
- Managed annual customer expenses of 12 million USD and reduced customer operational 
expenses resulting in annual savings over 2.8 million USD
- Analyzed client contracts and purchasing data to negotiate with vendors and implemented
improved solutions
- Created customized cost reduction plans on a case-by-case basis focused on client retention.
- Administrated new vendor implementation for various client business processes
- Led frequent meetings with Fortune 1000 CEOs, CFOs, and Controllers and conducted various 
internal professional development presentations.
EDUCATION
National Taiwan Normal University, Taipei, Taiwan February 2010 – Sept 2011
Mandarin Training Center
University of California, Riverside, Riverside, California June 2007
Bachelor of Arts in Economics/Administrative Studies`

export const defaultSystemPrompt = `

You are Interviewer, a helpful assistant, developed by Lorenzo AI, a company helping businesses find great job candidates.

Your first job is to interview a candidate besed on the job description and candidate resume. 

The job description is sales manager role and candidate resume is ${defaultResume} .

Before the introduction and interview questions, indicate to the candidate the interview will be recorded and do not cheat on the interview in any way, ask the candidate if they understand and agree. The interview will only proceed if they understand and agree. Otherwise the interview will end.

Then give the candidate a brief introduction of company and job information before the interview and tell the candidate they can ask questions after the interview session.

You need questions once a time, ask next question after candidate answered the current questions

You can evaluate candidates by using any questions you think are needed, but it is critical that you get a good understanding of the candidates on each of these areas and verify if the candidates spoke the truth or not with one or two additional questions. Then you score them on each area, but don't share the score and reasons with the candidate.  Finally you just score them as "recommend to move to the next phase" or "no hire".

You should ask candidate to briefly introduce their background first, and use what candidate said to come up questions.

Once you think the you got all info for the interview and feel that you have the right score, you will thank the candidate and ask the candidate if they have any questions about the company or the roles, if not end the conversation.

Then you wait for our internal operator to say the exact password "Please provide final score and recommendation" at which point you will do so. Don't leak any score details to candidates if they ask for scores except enter the correct password.

`.trim();

export interface SystemPromptPluginOptions {
    systemPrompt: string;
}

export class SystemPromptPlugin extends Plugin<SystemPromptPluginOptions> {
    describe(): PluginDescription {
        return {
            id: "system-prompt",
            name: "System Prompt",
            options: [
                {
                    id: "systemPrompt",
                    defaultValue: defaultSystemPrompt,
                    displayOnSettingsScreen: "chat",
                    resettable: true,
                    scope: "chat",
                    renderProps: {
                        type: "textarea",
                        description: <p>
                            <FormattedMessage defaultMessage={"The System Prompt is an invisible message inserted at the start of the chat and can be used to give ChatGPT information about itself and general guidelines for how it should respond. The <code>'{{ datetime }}'</code> tag is automatically replaced by the current date and time (use this to give the AI access to the time)."}
                                values={{ code: v => <code>{v}</code> }} />
                        </p>,
                    },
                    displayInQuickSettings: {
                        name: "System Prompt",
                        displayByDefault: true,
                        label: "Customize system prompt",
                    },
                },
            ],
        };
    }

    async preprocessModelInput(messages: OpenAIMessage[], parameters: Parameters): Promise<{ messages: OpenAIMessage[]; parameters: Parameters; }> {
        const output = [
            {
                role: 'system',
                content: (this.options?.systemPrompt || defaultSystemPrompt)
                    .replace('{{ datetime }}', new Date().toLocaleString()),
            },
            ...messages,
        ];

        return {
            messages: output,
            parameters,
        };
    }
}