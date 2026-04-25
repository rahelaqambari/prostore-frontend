import { Button } from "@/components/ui/button";
import { Link, UserIcon } from "lucide-react";

export default async function UserButton() {
 
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }
