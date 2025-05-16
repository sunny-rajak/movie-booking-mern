import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../Css/booking.css";
import NavbarPage from "./NavbarPage";

const BookingPage = () => {
    const { id } = useParams();
    const [selectedSlot, setSelectedSlot] = useState("");
    const [seatCount, setSeatCount] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookingMsg, setBookingMsg] = useState("");

    const rows = 5;
    const cols = 8;

    const slots = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];

    const handleSeatClick = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            // Deselect if already selected
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
        } else {
            if (selectedSeats.length < seatCount) {
                // Select only up to seatCount
                setSelectedSeats([...selectedSeats, seatId]);
            } else {
                alert(`You can only select ${seatCount} seat(s).`);
            }
        }
    };

    const handleBooking = () => {
        if (!selectedSlot || selectedSeats.length !== seatCount) {
            Swal.fire({
                title: "Please select a time slot and required number of seats.",
                icon: "warning",
            });
            return;
        }
        Swal.fire({
            title: "Success",
            text: `Your booking is confirmed for ${selectedSlot}.`,
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            draggable: true,
        }).then((result) => {
            // When the user clicks OK in the modal,
            // update the booking message in our component.
            if (result.isConfirmed) {
                setBookingMsg(
                    `Booked ${
                        selectedSeats.length
                    } seats for ${selectedSlot}:\n${selectedSeats.join(", ")}`
                );
            }
        });

        // alert(
        //     `Booked ${
        //         selectedSeats.length
        //     } seat(s) for ${selectedSlot}:\n${selectedSeats.join(", ")}`
        // );
    };

    return (
        <div className="booking-container">
            <h2>Book Your Ticket</h2>

            {/* Slot selection */}
            <div className="slot-selection">
                <h4>Select a Time Slot:</h4>
                <div className="slots">
                    {slots.map((slot) => (
                        <button
                            key={slot}
                            className={`slot-btn ${
                                selectedSlot === slot ? "selected" : ""
                            }`}
                            onClick={() => setSelectedSlot(slot)}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            </div>

            {/* Seat Count selection */}
            <div className="seat-section">
                <h4>How many seats?</h4>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={seatCount}
                    onChange={(e) => {
                        setSeatCount(parseInt(e.target.value) || 0);
                        setSelectedSeats([]);
                    }}
                />
            </div>

            {seatCount > 0 && (
                <div className="seat-layout">
                    <h4>
                        Select {seatCount} Seat{seatCount > 1 ? "s" : ""}
                    </h4>
                    <div className="seat-grid">
                        {[...Array(rows)].map((_, rowIndex) => (
                            <div key={rowIndex} className="seat-row">
                                {[...Array(cols)].map((_, colIndex) => {
                                    const seatId = `${String.fromCharCode(
                                        65 + rowIndex
                                    )}${colIndex + 1}`;
                                    const isSelected =
                                        selectedSeats.includes(seatId);

                                    return (
                                        <div
                                            key={seatId}
                                            className={`seat ${
                                                isSelected ? "selected" : ""
                                            }`}
                                            onClick={() =>
                                                handleSeatClick(seatId)
                                            }
                                        >
                                            {seatId}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button className="confirm-btn" onClick={handleBooking}>
                Confirm Booking
            </button>

            {bookingMsg && (
                <div className="booked-tkt-msg">
                    {bookingMsg.split("\n").map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookingPage;
