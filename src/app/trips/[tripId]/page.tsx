import Container from "@/components/Container";
import { trip } from "@/utils/trip";
import TripDetails from "./TripDetails";

interface IParams {
  tripId?: string;
}

const Package = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <TripDetails trip={trip} />
      </Container>
    </div>
  );
};

export default Package;
