"use client";
import React,{ useState } from 'react';
import { News } from "@/services/api/news";
import { AxiosError } from 'axios';

export default function NewsCard() {
    
    const[id, setId] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDesctiption] = useState("");
    const[date, setDate] = useState("");
  

  return (
    <div>NewsCard</div>
  )
}
