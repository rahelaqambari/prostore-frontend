
import {
  DropdownMenu,
  DropdownMenuTrigger,
  
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";

async function UserButton() {
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
             <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
          </div>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}

export default UserButton;
