import React, { useEffect, useState } from "react";
import LandingLayout from "./layout/landing.layout";
import Home from "./sections/home";
import { useAppSelector } from "@/store";
import { sectionsBlockList } from "@/constants/sectionsList";

interface LandingPageProps {}

function LandingPage({}: LandingPageProps) {
  const [show, setShow] = useState(false);
  const { homePageData, siteSettings } = useAppSelector((state) => state.site);
  const sectionIncluded = homePageData?.sectionsIncluded || [];
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) return null;
  return (
    <LandingLayout title={siteSettings?.siteName}>
      <>
        <Home />

        {sectionIncluded?.map((sec, index) => {
          return (
            <div key={index}>
              {sectionsBlockList[sec].renderComponent}
            </div>
          );
        })}
      </>
    </LandingLayout>
  );
}

export default LandingPage;
