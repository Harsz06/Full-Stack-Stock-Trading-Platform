import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Charges from "./Charges";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Charges />
    </>
  );
}

export default PricingPage;
