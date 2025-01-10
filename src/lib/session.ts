import { redirect } from "next/navigation";
import { useState } from "react";

const session = () => {
  const [session, setSession] = useState(false);
  if (!session) {
    redirect("article");
  }
};

export default session;
