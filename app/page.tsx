import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <TopBar />
      <Navbar />
      <Hero />
    </Fragment>
  );
}
