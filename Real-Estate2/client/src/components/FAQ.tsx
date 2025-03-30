import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center px-16 py-10 gap-y-12">
      <h1 className="text-4xl font-bold border-b-2 border-blue-500 pb-2 px-5">
        Frequently Asked Questions
      </h1>

      {/* Question 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2 className="text-lg font-semibold">
            How do I search for properties?
          </h2>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          You can use our **smart search filters** to find properties by
          location, price, and type. Additionally, our **interactive map** lets
          you explore homes near your preferred areas.
        </AccordionDetails>
      </Accordion>

      {/* Question 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2 className="text-lg font-semibold">
            Do I need an account to save properties?
          </h2>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          Yes! Creating a **free account** allows you to **save** your favorite
          listings, track price changes, and get alerts when new properties are
          available.
        </AccordionDetails>
      </Accordion>

      {/* Question 3 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2 className="text-lg font-semibold">
            Is my data secure when signing up?
          </h2>
        </AccordionSummary>
        <AccordionDetails className="text-gray-700">
          Absolutely! We use **Clerk authentication**, ensuring **secure login**
          via email or Google. Your personal information remains **safe and
          protected**.
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
