import { redirect } from "next/navigation";

export default function Page() {
  redirect("/account/dashboard"); // Redirect to /new-page
}
