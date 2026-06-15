import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";

export async function GET() {
  try {
    await connectDB();
    return jsonSuccess({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return jsonError("Database connection failed", 503);
  }
}
