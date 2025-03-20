"use client";  // Required for client-side interactivity

import { useState } from "react";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setResult(""); // Clear previous result
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await res.json();
            if (res.ok) {
                setResult(data.result || "No response from AI.");
            } else {
                setResult(`Error: ${data.error}`);
            }
        } catch (error) {
            setResult("Error generating code. Check console for details.");
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">AI MERN Code Generator</h1>
            <input
                className="border p-2 w-full"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter prompt (e.g., create a login page)"
            />
            <button
                className="bg-blue-500 text-white p-2 mt-2"
                onClick={handleGenerate}
                disabled={loading}
            >
                {loading ? "Generating..." : "Generate Code"}
            </button>
            <pre className="mt-4 bg-gray-100 p-2 whitespace-pre-wrap">{result}</pre>
        </div>
    );
}
