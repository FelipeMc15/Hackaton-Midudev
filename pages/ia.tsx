import Generator from "@/components/Generator/Generator";
import NavBar from "@/components/NavBar/NavBar";

import Head from "next/head";

export default function IA() {
  return (
    <>
      <Head>
        <title>Nutriplanes | Generator</title>
      </Head>
      <Generator />
      <NavBar />
    </>
  );
}
