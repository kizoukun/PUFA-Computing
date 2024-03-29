"use client";
import Button from "@/components/Button";
import { API_EVENT } from "@/config/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface RegisterButtonProps {
    eventId: number;
    eventTitle: string;
    isAlreadyRegistered: boolean;
}

export default function RegisterButton({
    eventId,
    eventTitle,
    isAlreadyRegistered,
}: RegisterButtonProps) {
    const router = useRouter();
    const handleRegister = async () => {
        try {
            Swal.fire({
                title: "Register for Event",
                text: `Are you sure you want to register for ${eventTitle}?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then(async (result) => {
                try {
                    if (result.isConfirmed) {
                        const accessToken =
                            localStorage.getItem("access_token");
                        const response = await axios.post(
                            `${API_EVENT}/${eventId}/register`,
                            {},
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${accessToken}`,
                                },
                            }
                        );

                        if (response.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Registered successfully!",
                                text: "Redirect to dashboard...",
                                showConfirmButton: false,
                                timer: 3000,
                            }).then(() => {
                                router.push("/dashboard/events");
                            });
                        } else {
                            await Swal.fire({
                                icon: "error",
                                title: "Registration failed",
                                text: "There was an error while registering for the event.",
                            });
                        }
                    }
                } catch (error: any) {
                    console.error("Error registering for event:", error);
                    if (
                        error.response &&
                        error.response.status === 500 &&
                        error.response.data &&
                        error.response.data.message &&
                        error.response.data.message.includes(
                            "Request failed with status code 500"
                        )
                    ) {
                        Swal.fire({
                            icon: "error",
                            title: "Registration failed",
                            text: "Maximum registration limit reached for this event.",
                        });
                    } else {
                        await Swal.fire({
                            icon: "error",
                            title: "Registration failed",
                            text: `There was an error while registering event ${eventTitle}`,
                        });
                    }
                }
            });
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <Button
            className="w-5/6 border-[#353535] py-2 text-[#353535] hover:bg-[#353535] hover:text-white"
            onClick={handleRegister}
            disabled={isAlreadyRegistered}
        >
            {isAlreadyRegistered ? "Registered" : "Register"}
        </Button>
    );
}
