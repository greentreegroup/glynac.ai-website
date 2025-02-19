import React from "react";
import { useParams } from "react-router-dom";
import { Typography} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";


const softwareContent = {
    "cloud-vs-on-premise": {
        title: "Cloud vs. On-Premise Solutions",
        description: "Choosing between cloud-based and on-premise solutions depends on your business needs. Below is a comparison to help you decide:",
        image: "/img/data-image.jpg",

        details: [
            {
                heading: "What is Cloud Computing",
                text: "Cloud computing delivers computing services-such as storage, databases, networking, and software-over the internet, allowing businesses to scale quickly without maintaining physical infrastructure."
            },
            {
                heading: "What is On-Premise Computing?",
                text: "On-premise solutions require businesses to host software and infrastructure on their own servers, giving them full control over security, compliance, and performance."
            }
        ],

        prosAndCons: {
            cloud: {
                title: "Advantages of Cloud Solutions",
                pros: [
                    "Lower upfront costs (subscription based pricing).",
                    "Scalable resources that grow with your business.",
                    "Remote accessibility from any location.",
                    "Automatic updates and maintanance handled by providers."
                ],
                cons: [
                    "Requires an internet connection to access services.",
                    "Data security is managed by a third party,",
                    "Subscription costs may add up over time."
                ]
            },
            onPremise: {
                title: "Advantages of On-Premise Solutions",
                pros: [
                    "Greater control over security and compliance.",
                    "One-time investment with no recurring subscription fees.",
                    "Better performance for high-demand local applications",
                    "No reliance on internet connectivity for operation."
                ],
                cons: [
                    "Higher upfront hardware and maintance costs.",
                    "Requires in-house IT experience.",
                    "Limited scalability compared to cloud solutions."
                ]
            }
        },

        comparisonTable: {
            headers: ["Feature", "Cloud-Based", "On-Premise"],
            rows: [
                ["Upfront Cost", "Low (Subscription)", "High (One-Time"],
                ["Scalability", "Highly Scalable", "Limited by Hardware"],
                ["Maintenance", "Managed by Provider", "Managed by IT Team"],
                ["Security", "Provider-Managed", "Fully Controlled by Business"],
                ["Internet Dependency", "Required", "Not Required"]
            ]
    },

    useCases: [
        {
            title: "When to Choose Cloud?",
            points: [
                "Startups and small businesses needing cost-effective solutions.",
                "Companies with remote teams requiring access from anywhere.",
                "Organizations that want automatic software updates"
            ]
        },
        {
            title: "When to Choose On-Premise",
            points: [
                "Businesses with strict data security and complaince needs.",
                "Companies requiring full control over IT infrastructure.",
                "Organizations handling sensitive or confidential information."
            ]
        }
    ],

},

    "integrated-tools": {
        title: "Integrated Tools",
        description: "Discover software that seamlessly integrates with your existing business systems.",
        image: "/img/data-image.jpg",

        details: [
            {
                heading: "What Are Integrated Tools?",
                text: "Integrated tools are software solutions designed to work seamlessly with your existing business applications, ensuring smooth workflow automation and improved efficiency."
            },
            {
                heading: "Why Use Integrated Tools?",
                text: "Using integrated tools reduces manual data entry, enhances communication between departments, and allows businesses to scale more effectively."
            }
        ],

        prosAndCons: {
            pros: [
                "Improves workflow efficiency by automating tasks.",
                "Reduces errors caused by manual data entry.",
                "Enhances collaboration between different software tools.",
                "Allows businesses to scale without major system overhauls."
            ],
            cons: [
                "Some integrations require additional setup and maintanance.",
                "Not all software supports seamless integration.",
                "Security concerns when connecting third-party applications."
            ]
        },

        commonExamples: [
            {
                category: "Customer Relationship Management (CRM)",
                description: "Tools like Salesforce and HubSpot integrate with email, calendars, and marketing automation."
            },
            {
                category: "Enterprise Resource Planning (ERP)",
                description: "Software like SAP and Oracle integrates finance, HR, and operations into one system."
            },
            {
                category: "Communication Platforms",
                description: "Slack, Microsoft Teams, and Zoom integrates with project management and file-sharing tools."
            },
            {
                category: "E-Commerce Platforms",
                description: "Shopify and WooCommerce integrate with inventory management and payment gateways."
            }
        ],

        comparisonTable: {
            headers: ["Feature", "Integrated Tools", "Standalone Software"],
            rows: [
                ["Workflow Automation", "Yes", "Limited"],
                ["Data Sync Across Apps", "Yes", "No"],
                ["Scalability", "High", "Moderate"],
                ["Collaboration Features", "Yes", "Basic"],
                ["Custom Integrations", "Available", "Rare"]
            ]
        },

        useCases: [
            {
                title: "When to Use Integrated Tools?",
                points: [
                    "When managing multiple applications that need to share data.",
                    "For businesses looking to improve automation and reduce manual tasks.",
                    "When teams need seamless communication between different software tools."
                ]
            },
            {
                title: "When to Avoid Integrated Tools?",
                points: [
                    "If your business operates independently with minimal software dependencies.",
                    "If security and data privacy concerns prevent third-party integration.",
                    "When cost of integration outweighs the benefits for small operations."
                ]
            }
        ]
    },
    "communication-tools": {
        title: "Communication Tools",
        description: "Explore top communication tools designed to improve collaboration and productivity.",
        image: "/img/data-image.jpg",

        details: [
            {
                heading: "What Are Communication Tools?",
                text: "Communication tools enable teams to collaborate efficiently, share information in real-time, and streamline workflow through various digital channels"

            }
        ],

        prosAndCons: {
            pros: [
                "Enhance team collaboration and productivity.",
                "Allows for real-time communication regardless of location.",
                "Reduces email clutter by offering instant messaging alternatives.",
                "Supports video conferencing and file sharing."
            ],
            cons: [
                "Some tools require training for effective use.",
                "Security concerns when sharing sensitive information.",
                "Can lead to communication overload of not managed properly."
            ]
        },

        commonExamples: [
            {
                category: "Instant Messaging",
                description: "Platforms like Slack, Microsoft Teams, and Discord provide real-time chat capabilities for teams."
            },
            {
                category: "Video Conferencing",
                description: "Zoom, Google Meet, and Microsoft Teams allow face-to-face virtual meetings for remote teams."
            },
            {
                category: "Project Collaboration",
                description: "Tools like Asana, Trello, and Monday.com integrate communication with task management."
            },
            {
                category: "Email and Business Communication",
                description: "Gmail, Outlook, and ProtonMail provide secure business communication."
            }
        ],

        comparisonTable: {
            headers: ["Feature", "Slack", "Zoom", "Google Meet"],
            rows: [
                ["Instant Messaging", "Yes", "No", "No"],
                ["Video Conferencing", "No", "Yes", "Yes"],
                ["File Sharing", "Yes", "Yes", "Yes"],
                ["Screen Sharing", "Yes", "Yes", "Yes"],
                ["Integration with Other Apps", "Extensive", "Moderate", "Limited"]
            ]
        },

        useCases: [
            {
                title: "When to Use Communication Tools?",
                points: [
                    "For remote teams needing seamless real-time collaboration.",
                    "To reduce reliance on email for quick updates and discussions.",
                    "For hosting virtual meetings and screen-sharing sessions.",
                    "When managing projects across different teams and departments."
                ]
            },
            {
                title: "Beat Practices for Using Communication Tools",
                points: [
                    "Set clear communication guidelines to avoid overload.",
                    "Use appropriate channels for different types of communication.",
                    "Leverage integrations to enhance productivity.",
                    "Ensure data security and encryption when using communication tools."
                ]
            }
        ]
    },
    "email-tools": {
        title: "Email Tools",
        description: "Find email management tools to enhance business efficiency and organization.",
        image: "/img/data-image.jpg",

        details: [
            {
                heading: "What Are Email Tools?",
                text: "Email tools help business and individuals manage their emails efficiently by organizing messages, automating tasks, and enhancing communication security."
            },
            {
                heading: "Why Are Email Tools Important?",
                text: "With the overwhelming amount of emails professionals recieve daily, email tools streamline inbox organization, improve response times, and reduce clutter."
            }
        ],
        prosAndCons: {
            pros: [
                "Automates email sorting and prioritization.",
                "Enhances security with encryption and spam filtering.",
                "Integrates with calendars and task management apps.",
                "Improves productivity with scheduling and templates."
            ],
            cons: [
                "Some tools require a learning curve to set up effectively.",
                "Premium features may come with additional costs.",
                "Email automation may sometimes misclassify important messages."
            ]
        },

        commonExamples: [
            {
                category: "Email Clients",
                description: "Popular options like Gmail, Oulook, and Thunderbird provide efficient email management and integration with other tools."
            },
            {
                category: "Email Marketing Platforms",
                description: "Tools like Mailchimp, HubSpot, and Constant Contact help businesses sutomate and track email compaigns."
            },
            {
                category: "Security & Encryption",
                description: "Services like ProtonMail, Tutanota, and Zoho Mail offer encrypted email solutions for privacy-conscious users."
            },
            {
                category: "Inbox Organization & Productivity",
                description: "Apps like Superhuman, SaneBox, and Boomerang help users manage their email workflow and reduce inbox overload."
            }
        ],

        comparisonTable: {
            headers: ["Features", "Gmail", "Outlook", "ProtonMail"],
            rows: [
                ["AI-Powered Email Sorting", "Yes", "Yes", "No"],
                ["End-to-End Encryption", "No", "No", "Yes"],
                ["Integrated Calendar", "Yes", "Yes", "No"],
                ["Custom Email Template", "Limited", "Yes", "No"],
                ["Advanced Spam Filtering", "Yes", "Yes", "Yes"]
            ]
        },

        useCases: [
            {
                title: "When to Use Email Tools?",
                points: [
                    "For managing high volumes of daily emails efficiently.",
                    "To automate email marketing campaigns and follow-ups",
                    "For businesses needing secure, encrypted email communication.",
                    "To reduce spam and imrpove inbox organization."
                ]
            },
            {
                title: "Best Practices for Using Email Tools",
                points: [
                    "Use filters and labels to automatically categorize emails.",
                    "Enable two-factor authentication for email security.",
                    "Regularly clean up your inbox to maintain efficiency.",
                    "Schedule emails for better time management."
                ]
            }
        ]
    },
};

const Software = () => {
    const { category } = useParams();
    const content = softwareContent[category];

    console.log("Current category: ", category);
    console.log("Content data: ", content);

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-red-500">
                    Error: No content found for this category
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[url('/img/background-3.png')] bg-cover bg-center ">
            {/* Static Header Section */}
            <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-center text-white pt-20 px-4">
                <Typography variant="h1" className="mb-6 font-black">
                    Software
                </Typography>
                <Typography variant="lead" className="max-w-2xl">
                    Explore the essential software tools that power our operations, from cloud solutions to integrated business applications,
                    designed to enhance efficiency, collaboration, and productivity.
                </Typography>
            </div>
    
            {/* Dynamic Content Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 p-8">
                {/* Left Side Content (Dynamic Text) */}
                <div className="w-full lg:w-1/2 text-left">
                            <h2 className="text-3xl font-bold mb-4">{content.title || "No Title Available"}</h2>
                            <p className="text-lg text-gray-600">{content.description || "No description available"}</p>
                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    {content?.image && (
                        <img
                            src="/img/data-image.jpg"
                            alt="Software"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    )}
                </div>
            </div>

            {/* Additional Content */}
            <div className="container mx-auto w-full p-8 flex flex-col items-center text-center">
                {content && (
                    <>
                    {/* Icons and Labels Section */}
                    <div className="container mx-auto w-full p-8 flex flex-wrap justify-between items-center text-center">
                        {[
                            { img: "/img/i'm_watching_you.png", text: "Employee Monitoring" },
                            { img: "/img/timer_icon.png", text: "Work Time Tracking" },
                            { img: "/img/stats_icon.png", text: "Remote Access and Statistics" },
                            { img: "/img/list_icon.png", text: "Guide to Employee Monitoring" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center w-1/5 min-w[150px]">
                                <img src={item.img} alt={item.text} className="w-16 h-16 mb-2" />
                                <p className="text-lg font-bold text-gray-800">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    {/* Details Section */}
                    {content.details && content.details.map((section, index) => (
                        <div key={index} className="mt-6">
                            <h3 className="text-2xl font-bold mb-2">{section.heading}</h3>
                            <p className="text-lg text-gray-600">{section.text}</p>
                        </div>
                    ))}
                    {/* Pros and Cons Section */}
                    {content.prosAndCons && (
                        <div className="mt-6">
                            {content.prosAndCons.cloud && (
                                <>
                                    <h3 className="text-2xl font-bold mb-2">{content.prosAndCons.cloud.title}</h3>
                                    <ul className="list-disc pl-6 text-lg text-gray-600">
                                        {content.prosAndCons.cloud.pros.map((pro, index) => (
                                            <li key={index}>{pro}</li>
                                        ))}
                                     </ul>
                                </>
                            )}

                            {content.prosAndCons.onPremise && (
                                <>
                                    <h3 className="text-2xl font-bold mb-2">{content.prosAndCons.onPremise.title}</h3>
                                    <ul className="list-disc pl-6 text-lg text-gray-600">
                                        {content.prosAndCons.onPremise.pros.map((pro, index) => (
                                            <li key={index}>{pro}</li>
                                        ))}
                                     </ul>
                                </>
                            )}
                            
                        </div>
                    )}
                    {/* Comparison Table */}
                    {content.comparisonTable && (
                        <div className="mt-6 ovreflow-x-auto">
                            <h3 className="text-2xl font-bold mb-2">Feature Comparison</h3>
                            <table className="table-auto border-collapse border border-gray-400 w-full">
                                <thead>
                                    <tr className="bg-blue-700 text-white">
                                        {content.comparisonTable.headers.map((header, index) => (
                                            <th key={index} className="border border-gray-400 px-4 py-2">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {content.comparisonTable.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="text-center bg-blue-900 text-white">
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="border border-gray-400 px-4 py-2">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                    )}
                    {/* Use Cases Section */}
                    {content.useCases && content.useCases.map((useCase, index) => (
                         <div key={index} className="mt-6">
                            <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                             <ul className="list-disc pl-6 text-lg text-gray-600">
                                 {useCase.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                     ))}
                </>
            )}
        </div>

        <Footer />
    </div>
    
        
 );
};


export default Software