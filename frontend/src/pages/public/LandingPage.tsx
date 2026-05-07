import ExistingProblems from "../../components/public/LandingPage/problems/ExistingProblems";
import Hero from "../../components/public/LandingPage/hero/Hero";
import UrugoFixes from "../../components/public/LandingPage/fixes/UrugoFixes";
import ProcessFeaturesLandLord from "../../components/public/LandingPage/features/ProcessFeaturesLandLord";
import ProcessFeaturesTenants from "../../components/public/LandingPage/features/ProcessFeaturesTenants";
import AvailablePropeties from "../../components/public/LandingPage/properties/AvailablePropeties";
import Ai_Info from "../../components/public/LandingPage/Ai-Info/Ai_Info";

function LandingPage() {
  return (
    <div className="w-full  ">
      <Hero />
      <ExistingProblems />
      <UrugoFixes />
      <ProcessFeaturesLandLord />
      <ProcessFeaturesTenants />
      <AvailablePropeties />
      <Ai_Info />
    </div>
  );
}

export default LandingPage;
