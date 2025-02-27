"use client"
import dynamic from "next/dynamic";

const Card = dynamic(
  ()=>import('../components/Card'),
  {ssr:false}
)
export default function Home() {
  return (
  // <Scroll/>
  // <Button/>
  <Card/>
  );
}
