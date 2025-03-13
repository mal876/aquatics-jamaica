import React from 'react'

import { useState } from "react";
import Footer from '../components/Footer';

import './Events.css'

const events = [
  { id: 1, title: "Walter Rogers Age Group National Championships", date: "March 04 - March 10", location: "Kingston" },
  { id: 2, title: "2025 Mayberry High Performance Swim Classic (Secondary/Tertiary)", date: "March 21, 2025", location: "Kingston" },
  { id: 3, title: "2025 Mayberry High Performance Swim Classic (Prep/Primary)", date: "March 22, 2025", location: "Kingston" },
  { id: 4, title: "Carifta", date: " April 17 - April 24, 2025 ", location: "Trinidad and Tobago" },
  { id: 5, title: " Neville Alexander Memorial Meet ", date: " May 2, 2025 - May 5, 2025 ", location: "Kingston" },
  { id: 6, title: " Burger King/YMCA Prep/Prim Schools Swim Meet ", date: " May 9, 2025 - May 10, 2025 ", location: "Kingston" },
  { id: 7, title: " 1st PanAm Aquatics Championships ", date: "May 13 -25, 2025  ", location: " Medellin, Colombia " },
  { id: 8, title: " Tornadoes Invitational Swim Meet ", date: " May 31, 2025 - Jun 1, 2025 ", location: "Kingston" },
  { id: 9, title: " Prep/Primary Swim Championships ", date: " Jun 6, 2025 - Jun 7, 2025 ", location: "Kingston" },
  { id: 10, title: "Swimaz Aquatic Long Course Championships ", date: "Jun 21, 2025", location: "Kingston" },
  { id: 11, title: " Sailfish Swim Academy Western Invitational ", date: "Jul 5, 2025", location: "West" },
  { id: 12, title: " Blue Marlin Open Water Meet ", date: "Jul 6, 2025", location: "Kingston" },
  { id: 13, title: " World Aquatics Championships - Singapore 2025 ", date: " Jul 11, 2025 - Aug 3, 2025 ", location: "Singapore" },
  { id: 14, title: " Pan Am Junior Games  ", date: " Aug 9, 2025 - Aug 23, 2025 ", location: " Paraguay " },
  { id: 15, title: " Dean Martin Memorial Meet ", date: " Oct 24, 2025 - Oct 27, 2025 ", location: "Kingston" },
  { id: 16, title: " Walter Lowi Memorial Sprint Classic ", date: " Nov 15, 2025 ", location: "Kingston" },
  { id: 17, title: " ASAJ Prep & Primary Schools Swimming Championships ", date: " Nov 22, 2025 ", location: "Kingston" },
];

const itemsPerPage = 5;
const totalPages = Math.ceil(events.length / itemsPerPage);

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Get events for the current page
  const currentEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div>
      <br /><br /><br />
      <div className=' flex justify-center items-center min-h-screen p-4 '>
            <div className=' w-full max-w-2xl border border-black p-6 rounded-lg shadow-lg bg-white '>
              
              <h4 className="text-4xl font-semibold text-center tracking-light underline underline-offset-8 decoration-2 decoration-solid decoration-green-800">
                Upcoming Events
              </h4>

              <br /><br />

              <div className="space-y-4">
                  {currentEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg shadow">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-gray-600">{event.date} • {event.location}</p>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-4 space-x-2 relative z-0">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      className={`px-6 py-3 min-w-[44px] min-h-[44px]  cursor-pointer touch-manipulation ${
                        currentPage === i + 1 ? "bg-green-900 text-white" : "bg-green-500"
                      }`}
                      onClick={() => {
                        console.log(`Page ${i + 1} clicked`);
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
            
            </div>

        </div>

      </div>
 
       <Footer className="mt-auto" />
    </div>
  );
}