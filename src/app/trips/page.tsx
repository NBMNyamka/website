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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {packages.map((trip: any) => {
            return <TripCard data={trip} />;
          })}
        </div>
      </Container>
    </div>
  );
}
