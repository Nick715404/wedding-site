import { Listing, WeddingCounter, Gallery } from "@/components";

export default function Home() {
  return (
    <main className="flex-grow container flex items-center justify-center flex-col">
      <Listing />
      <WeddingCounter />
      <Gallery />
    </main>
  );
}
