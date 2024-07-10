import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import NewArrivals from "../../components/arrivals/NewArrivals";
import Daily from "../../components/daily/Daily";
import Phones from "../../components/phones/Phones";
import StoreProducts from "../../components/store/StoreProducts";

export default function Home() {
  useEffect(() => {
    scrollTo(0,0)
  },[])
  return (
    <>
      {/* disabled */}
      <Hero />
      <div className="bg-bgColorWhite">
        <StoreProducts  />
        <NewArrivals />
        <Phones />
        <Daily />
      </div>
    </>
  );
}
