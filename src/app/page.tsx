import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import TripCard from "@/components/trips/tripCard";
import { packages } from "@/utils/packages";

export default function Home() {
  return (
    <div className="">
      <div>
        <HomeBanner />
      </div>
      <Container>
        <div>
          <div className="flex flex-col items-center justify-center pb-6">
            <h1 className="text-3xl font-bold">Featured places to stay</h1>
            <h2 className="text-gray-500">
              Popular places to trip that recommends for you
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {packages.map((trip: any) => {
              return <TripCard data={trip} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
