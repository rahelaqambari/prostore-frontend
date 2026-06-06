import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";

async function UserButton() {
  return (
    <Button asChild>
      <Link href="/logIn">
        <UserIcon /> Sign In
      </Link>
    </Button>
  );
}

export default UserButton;
