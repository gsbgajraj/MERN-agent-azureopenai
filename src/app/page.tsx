"use client";
import React, { useState, useEffect } from "react";
import FolderTree from "@/components/FolderTree";

const Home = () => {
    const [structure, setStructure] = useState(null);

    useEffect(() => {
        const fetchStructure = async () => {
            const res = await fetch("/api/generate");
            const data = await res.json();
            setStructure(data.structure);
        };

        fetchStructure();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Fixed MERN Folder Structure</h1>
            {structure ? (
                <FolderTree structure={structure} />
            ) : (
                <p>Loading folder structure...</p>
            )}
        </div>
    );
};

export default Home;
