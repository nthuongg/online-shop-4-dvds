import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Shapes, User, Disc3, Music2, Film, Gamepad2, Users, Factory, Mail, FileText, BarChart, Newspaper, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-md font-bold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Link href="/dashboard/categories">
              <Button variant={pathname === "/dashboard/categories" ? "secondary" : "ghost"} className="w-full justify-start">
                <Shapes className="w-4 h-4 mr-2" />
                Genres
              </Button>
            </Link>
            <Link href="/dashboard/artists">
              <Button variant={pathname === "/dashboard/artists" ? "secondary" : "ghost"} className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Artists
              </Button>
            </Link>
            <Link href="/dashboard/albums">
              <Button variant="ghost" className="w-full justify-start">
                <Disc3 className="w-4 h-4 mr-2" />
                Albums
              </Button>
            </Link>
            <Link href="/dashboard/songs">
              <Button variant="ghost" className="w-full justify-start">
                <Music2 className="w-4 h-4 mr-2" />
                Songs
              </Button>
            </Link>
            <Link href="/dashboard/movies">
              <Button variant="ghost" className="w-full justify-start">
                <Film className="w-4 h-4 mr-2" />
                Movies
              </Button>
            </Link>
            <Link href="/dashboard/games">
              <Button variant="ghost" className="w-full justify-start">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Games
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="w-4 h-4 mr-2" />
              Feedbacks
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Factory className="w-4 h-4 mr-2" />
              Suppliers
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Orders
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="w-4 h-4 mr-2" />
              Reports
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Newspaper className="w-4 h-4 mr-2" />
              News
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="w-4 h-4 mr-2" />
              Reviews
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}