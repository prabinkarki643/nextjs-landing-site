import CompanyVision from "@/components/landing/sections/companyvision";
import ContactUs from "@/components/landing/sections/contactus";
import FAQS from "@/components/landing/sections/faqs/faqs";
import Insight from "@/components/landing/sections/insight";
import OurTeam from "@/components/landing/sections/ourteam";
import Pricing from "@/components/landing/sections/pricing";
import Services from "@/components/landing/sections/services";
import Testimonial from "@/components/landing/sections/testimonial";
import WhatWeBuild from "@/components/landing/sections/whatwebuild";
import WhoWeAre from "@/components/landing/sections/whoweare";

export enum SECTIONBLOCK {
  WHOWEARE = "Who We Are",
  COMPANYVISION = "Company Vision",
  INSIGHT = "Insight",
  WHATWEBUILD = "What We Build",
  SERVICESWEPROVIDE = "Services We Provide",
  FAQS = "Faqs",
  CONTACTUS = "Contact Us",
  PRICING = "Pricing",
  TESTIMONIAL = "Testimonial",
  OURTEAM = "Our Team",
}

export interface SectionI {
  renderComponent: JSX.Element;
}

export const sectionsBlockList: Record<SECTIONBLOCK, SectionI> = {
  [SECTIONBLOCK.WHOWEARE]: {
    renderComponent: <WhoWeAre />,
  },
  [SECTIONBLOCK.COMPANYVISION]: {
    renderComponent: <CompanyVision />,
  },
  [SECTIONBLOCK.INSIGHT]: {
    renderComponent: <Insight />,
  },
  [SECTIONBLOCK.WHATWEBUILD]: {
    renderComponent: <WhatWeBuild />,
  },
  [SECTIONBLOCK.SERVICESWEPROVIDE]: {
    renderComponent: <Services />,
  },
  [SECTIONBLOCK.FAQS]: {
    renderComponent: <FAQS />,
  },
  [SECTIONBLOCK.CONTACTUS]: {
    renderComponent: <ContactUs />,
  },
  [SECTIONBLOCK.PRICING]: {
    renderComponent: <Pricing />,
  },
  [SECTIONBLOCK.TESTIMONIAL]: {
    renderComponent: <Testimonial />,
  },
  [SECTIONBLOCK.OURTEAM]: {
    renderComponent: <OurTeam />,
  },
};
