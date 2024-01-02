import React from "react";
import CafeGallery from "../../blocks/cafe-gallery/cafe-gallery";
import Buy from "../../blocks/buy/buy";

function BuyPage({ slides, buyOptions }) {
  return (
    <>
      <CafeGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;
