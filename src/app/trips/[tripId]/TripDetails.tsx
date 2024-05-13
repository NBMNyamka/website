"use client";

import { Rating } from "@mui/material";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { FaCalendar, FaSwimmer } from "react-icons/fa";
import { IoPerson, IoPricetag } from "react-icons/io5";

interface TripDetailsProps {
  trip: any;
}

const TripDetails: React.FC<TripDetailsProps> = ({ trip }) => {
  const tripRating =
    trip.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    trip.reviews.length;

  const handleDateChange = () => {};
  const bookTrip = () => {};

  return (
    <div className="flex flex-col gap-6 pb-2">
      <div className=" aspect-square overflow-hidden relative w-full and h-[200px] md:h-[400px] rounded-lg bg-slate-500">
        <Image fill src="/image/aylal.jpg" alt="" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{trip.name}</h2>
      </div>
      <div className="text-justify">
        <div className="text-md font-semibold mt-2">
          Date: <span className="text-gray-500 font-bold">May - October</span>
        </div>
      </div>
      <div className="text-justify">
        <div className="text-md font-semibold">
          Duration: <span className="text-gray-500 font-bold">7 days</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Rating value={tripRating} readOnly />
        <div>{trip.reviews.length} reviews</div>
      </div>
      <div className="text-justify border-3 bg-gray-100 rounded-md mx-auto px-6 p-4">
        <h1 className="text-2xl font-bold mt-2 mb-4">Overview</h1>
        {trip.description}
      </div>
      <div className="flex flex-col text-justify bg-gray-100 border-3 rounded-md px-6 p-4">
        <span className="font-semibold text-2xl mb-3 mt-3">
          Trip Highlights
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 content-start text-sm">
          {trip.category && <FaSwimmer size={30} />}
          {trip.category && <FaSwimmer size={30} />}
          {trip.category && <FaSwimmer size={30} />}
        </div>
      </div>

      <div className="flex flex-col text-justify bg-gray-100 border-3 rounded-md px-6 p-4">
        <span className="font-semibold text-2xl mb-3 mt-3">Itinary</span>
        <div className="  grid grid-cols-3 items-center justify-center relative">
          <div className="h-[140px] w-[140px] bg-white flex items-center justify-center rounded-full border-3 border-dotted border-blue-500 z-20">
            <div className="h-[120px] w-[120px] bg-blue-500 rounded-full items-center justify-center flex z-20">
              <h1 className="text-white font-medium text-2xl">Day 1 </h1>
            </div>
          </div>
          <div className="col-span-2">
            <div className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              aperiam doloribus facilis perspiciatis in possimus. Ratione
              corrupti esse, eligendi pariatur tenetur, laudantium omnis
              praesentium maiores sequi tempora, dignissimos cumque itaque.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border flex flex-col gap-10 h-max w-1/3">
        <div className="flex flex-col gap-3">
          <h1 className="font-md text-2xl">Price</h1>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <IoPricetag className="text-3xl" />
              <span className="text-xl">From</span>
            </div>
            <span className="text-3xl font-bold">{trip.price}</span>
          </div>
          <div className="flex flex-col gap-5">
            <Input
              endContent={<FaCalendar />}
              type="date"
              onChange={handleDateChange}
            />
            <Input
              endContent={<IoPerson />}
              placeholder="Guests"
              type="number"
            />
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between">
              <span className="text-xl">Total Price</span>
              <span className="text-3xl font-bold">{trip.price}</span>
            </li>
          </ul>
          <Button color="primary" size="lg" className="rounded-full">
            Book Trip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
