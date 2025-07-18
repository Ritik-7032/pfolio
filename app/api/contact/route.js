import { NextResponse } from "next/server";
import { Contact } from "@/models/Contact";
import dbConnect from "@/lib/db";
import { sendContactEmails } from "@/lib/mail";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, message } = body;
     
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
   console.log("Saved in db");
    const saved = await Contact.create({ name, email, message });

      console.log(saved);
    await sendContactEmails({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Message sent", data: saved },
      { status: 201 }
    );
  } catch (err) {
    console.log("Contact API Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
