export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  _id: string;
  status: "new" | "read" | "replied";
  createdAt: string;
}
