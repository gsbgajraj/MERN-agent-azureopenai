// import { NextResponse } from "next/server";
// import { AzureOpenAI } from "openai";

// export async function POST(req) {
//     try {
//         const { prompt } = await req.json();
//         if (!prompt) return NextResponse.json({ error: "Prompt is required" }, { status: 400 });

//         const client = new AzureOpenAI({
//             endpoint: process.env.AZURE_OPENAI_ENDPOINT,
//             apiKey: process.env.AZURE_OPENAI_API_KEY,
//             apiVersion: process.env.API_VERSION,
//             deployment: process.env.DEPLOYMENT,
//         });

//         const result = await client.chat.completions.create({
//             messages: [
//                 { role: "system", content: "You are a MERN stack developer. Only generate working code. Do not ask how you can assist." },
//                 { role: "user", content: prompt },
//             ],
//             max_tokens: 800,
//             temperature: 0.7,
//         });

//         return NextResponse.json({ result: result.choices[0].message.content }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

import { NextResponse } from "next/server";

export async function GET() {
    const folderStructure = {
        frontend: {
            src: {
                components: {},
                pages: {},
            },
            "package.json": "...",
        },
        backend: {
            routes: {},
            models: {},
            "server.js": "...",
        },
    };

    return NextResponse.json({ structure: folderStructure }, { status: 200 });
}
