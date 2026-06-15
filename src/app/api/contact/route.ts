import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";
import { contactFormSchema } from "@/lib/validators";
import { ContactModel } from "@/models";

export async function POST(request: Request) {
  try {
    let body;
    
    try {
      body = await request.json();
    } catch {
      return jsonError("Invalid JSON body. Please check your form data.", 400);
    }

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Invalid form data";
      return jsonError(firstError, 400);
    }

    let submission;
    let isMockData = false;

    try {
      // Try to connect and save to MongoDB
      await connectDB();
      submission = await ContactModel.create(parsed.data);
    } catch (dbError) {
      // Fallback: Log to file for development without MongoDB
      console.warn("[POST /api/contact] MongoDB connection failed, saving to file", dbError);
      isMockData = true;

      // Create a mock submission for development
      submission = {
        _id: { toString: () => `mock-${Date.now()}` },
        ...parsed.data,
        createdAt: new Date().toISOString(),
      };

      // Log to file in development
      try {
        const logsDir = join(process.cwd(), "logs");
        mkdirSync(logsDir, { recursive: true });
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] ${JSON.stringify(parsed.data)}\n`;
        writeFileSync(join(logsDir, "contact-submissions.log"), logEntry, { flag: "a" });
      } catch (fileError) {
        console.log("[POST /api/contact] Could not write to log file:", fileError);
      }
    }

    const message = isMockData
      ? "Thank you! Your message has been received. (Development mode - MongoDB not available)"
      : "Thank you! Your message has been received.";

    return jsonSuccess(
      { id: submission._id.toString(), isDevelopment: isMockData },
      message,
      201
    );
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return jsonError("Failed to submit contact form", 500);
  }
}

export async function GET() {
  return jsonError("Method not allowed", 405);
}
