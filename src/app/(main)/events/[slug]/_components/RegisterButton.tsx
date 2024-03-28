"use client";
import Button from "@/components/Button";
import {API_EVENT} from "@/config/config";
import {fetchUserEvents} from "@/services/api/user";
import axios from "axios";
import {access} from "fs";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {fetchEvents} from "@/services/api/event";

interface RegisterButtonProps {
    eventId: number;
    eventTitle: string;
    eventSlug: string;
}

export default function RegisterButton({
                                           eventId,
                                           eventTitle,
                                           eventSlug,
                                       }: RegisterButtonProps) {
    const [registerDisabled, setregisterDisabled] = useState(false);
    const [buttonRegisterText, setButtonRegisterText] = useState("Loading...")


    useEffect(() => {
        const userEvents = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    await Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "You havent logged in yet",
                    });

                    setButtonRegisterText("You need to login")
                    // router.push("/auth/signin");
                    return;
                }

                const response = await fetchUserEvents(userId);

                for (const event of response) {
                    if (event.slug == eventSlug) {
                        setregisterDisabled(true);
                        setButtonRegisterText("Registered")
                        return;
                    }
                }
                setButtonRegisterText("Register Now!")
            } catch (error) {
                console.log(error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Cant fetch users event, please try again later",
                });
            }
        };
        userEvents().then(r => r);
    }, []);

    const router = useRouter();
    const handleRegister = async () => {
        if (buttonRegisterText.toLowerCase().includes("login")) {
            router.push("/auth/signin")
            return;
        }
        try {
            Swal.fire({
                title: "Register for Event",
                text: `Are you sure you want to register for ${eventTitle}?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const accessToken = localStorage.getItem("access_token");
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
                            showConfirmButton: false,
                            timer: 1500,
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
            });


        } catch (error) {
            console.error("Error registering for event:", error);
        }
    };
    return (
        <Button
            className="w-5/6 border-[#353535] py-2 text-[#353535] hover:bg-[#353535] hover:text-white"
            onClick={handleRegister}
            disabled={buttonRegisterText.toLowerCase().includes("registered")}
        >
            {buttonRegisterText}
        </Button>
    );
}
