import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  ExpandMore,
  MenuBook,
  Headphones,
  ImportContacts,
  HelpOutline,
} from "@mui/icons-material";

const faqItems = [
  {
    question: "How can I read the Quran on this website?",
    answer:
      "You can read the Quran by navigating to the 'Read the Quran' section, where you'll find the full text with multiple translation options, tafsir explanations, and audio recitations. The text is available in Uthmani script with customizable font sizes.",
    icon: <MenuBook className="text-green-500 mr-3" />,
  },
  {
    question: "Can I listen to Quran recitations?",
    answer:
      "Yes, we offer high-quality audio recitations from renowned Qaris like Abdul Basit, Mishary Rashid, and Saad Al-Ghamdi. You can listen verse-by-verse or by complete surahs, with adjustable playback speed and repeat functionality.",
    icon: <Headphones className="text-green-500 mr-3" />,
  },
  {
    question: "What Hadith collections are available?",
    answer:
      "We provide authenticated collections including Sahih Bukhari, Sahih Muslim, Sunan Abu Dawood, Jami` at-Tirmidhi, Sunan An-Nasa'i, and Sunan Ibn Majah. All hadiths include grading information and explanatory notes.",
    icon: <ImportContacts className="text-green-500 mr-3" />,
  },
  {
    question: "How do I save my favorite verses/hadiths?",
    answer:
      "Simply click the heart icon on any verse or hadith to save it to your favorites. You need to be logged in to use this feature. Your saved items will be available across all your devices.",
    icon: <HelpOutline className="text-green-500 mr-3" />,
  },
  {
    question: "Are there mobile apps available?",
    answer:
      "Yes! Our platform is available as progressive web apps for both iOS and Android. You can install it from your browser and use it offline after downloading your preferred content.",
    icon: <HelpOutline className="text-green-500 mr-3" />,
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 flex items-center justify-center">
            <HelpOutline className="mr-3 text-4xl" />
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about using our Islamic resources
            platform.
          </p>
        </div>

        <div className="space-y-4 w-full">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-500"
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<ExpandMore className="text-green-400" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <div className="flex items-center">
                  {item.icon}
                  <Typography className="font-semibold text-lg">
                    {item.question}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-800 bg-opacity-70">
                <Typography className="text-gray-300 pl-10 pr-4 py-2">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
