import calc from "../assets/calculators.webp";
import graph from "../assets/graphing.webp";
import eq from "../assets/solution-steps.webp";
import installApp from "../assets/solution_page.webp";
import android from "../assets/android_app.svg";
import ios from "../assets/iphone_app_store_download.svg";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  return (
    <section className="flex flex-col h-full overflow-hidden justify-center pt-10 items-center">
      <motion.p
        className="text-2xl font-bold"
        initial={{ x: "-100%" }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
      >
        <span className="bg-pink-500 px-2 rounded-md py-1 mr-1">Math</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
          Ematica,
        </span>
        <span className="border-b-2 border-pink-500 pb-1">
          {" "}
          Make Math Easier
        </span>
      </motion.p>
      <header className="flex flex-row justify-center gap-9 items-center py-20">
        <motion.div
          initial={{ x: "-100%" }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          className="flex flex-col justify-center items-center gap-4 border-[1.3px] pb-3 rounded-lg border-pink-500"
        >
          <img
            src={calc}
            alt="Calculators"
            className="rounded-t-lg w-full h-72 object-cover"
          />
          <p className="font-medium text-lg border-b-2 border-pink-500 pb-2 px-10">
            Varied Calculators
          </p>
          {/* some description */}
          <p className="text-center px-2 max-w-sm">
            Check out our collection of advanced calculators, including
            trigonometry, statistics, and more.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-4 border-[1.3px] pb-3 rounded-lg border-pink-500">
          <img
            src={graph}
            alt="Graphing"
            className="rounded-t-lg w-full h-[19.5rem] object-cover"
          />
          <p className="font-medium text-lg border-b-2 border-pink-500 pb-2 px-10">
            Graphing Tools
          </p>
          {/* some description */}
          <p className="text-center px-2 max-w-sm">
            Explore our graphing tools, including interactive graphs and
            equations.
          </p>
        </div>

        <motion.div
          initial={{ x: "100%" }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          className="flex flex-col justify-center items-center gap-4 border-[1.3px] pb-3 rounded-lg border-pink-500"
        >
          <img
            src={eq}
            alt="Equations"
            className="rounded-t-lg w-full h-[19.5rem] object-cover"
          />
          <p className="font-medium text-lg border-b-2 border-pink-500 pb-2 px-10">
            Solving Equations
          </p>
          {/* some description */}
          <p className="text-center px-2 max-w-sm">
            Solve complex equations with our advanced equation solver.
          </p>
        </motion.div>
      </header>

      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      className="flex flex-row justify-center mr-36 items-center relative py-12">
        <img
          src={installApp}
          alt="Install App"
          className="w-1/2 object-cover"
        />
        <div className="flex flex-col absolute top-0 right-0 justify-center bg-white items-center gap-4 py-2 border-[1.3px] pb-3 rounded-lg border-pink-500">
          <p className="font-medium text-lg border-b-2 border-pink-500 pb-2 px-10">
            Install our App
          </p>
          {/* some description */}
          <p className="text-center px-2 max-w-sm">
            Install our app on your device and start solving equations and
            graphing.
          </p>

          <div className="flex flex-row gap-4">
            <img src={android} alt="Android" className="w-32" />
            <img src={ios} alt="IOS" className="w-32" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ x: "100%" }} whileInView={{ x: 0 }}>
        <Box
          sx={{ width: "100%" }}
          className="py-12 flex flex-col gap-y-6 justify-center items-center"
        >
          <motion.p>
            <span className="bg-clip-text border-b-2 border-pink-500 pb-2 px-10 font-medium text-3xl text-transparent bg-gradient-to-r from-pink-500 to-red-500">
              {" "}
              FAQ&apos;S
            </span>
          </motion.p>

          <div className="flex flex-row gap-4 px-8 justify-center items-center">
            <Accordion className="w-1/2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-gray-600" />}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <Typography className="font-semibold text-gray-800">
                  How do I install the app?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-50">
                <Typography className="text-gray-600">
                  You can download the app from the Google Play Store or the App
                  Store.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="w-1/2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-gray-600" />}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <Typography className="font-semibold text-gray-800">
                  Can I use the app on multiple devices?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-50">
                <Typography className="text-gray-600">
                  Yes, you can use the app on multiple devices.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="w-1/2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-gray-600" />}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <Typography className="font-semibold text-gray-800">
                  Is the app free to use?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-50">
                <Typography className="text-gray-600">
                  Yes, the app is free to use, but you can support us by making
                  a donation on our website.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </motion.div>
    </section>
  );
}
