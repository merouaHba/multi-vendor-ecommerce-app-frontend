
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import {
  User,
  ShoppingBag,
  Bell,
  Heart,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import useHeader from "@/hooks/useHeader";

const navigation = [
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Wishlist",
    href: "/dashboard/wishlist",
    icon: Heart,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const {logout} = useHeader();


  const NavigationLink = ({ item }: { item: typeof navigation[0] }) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.href;

    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
          isActive &&
            "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Icon className="h-4 w-4" />
        {item.name}
      </Link>
    );
  };

  const Sidebar = () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 px-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user?.profilePicture} alt={user?.name} />
          <AvatarFallback>
            {user?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{user?.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="space-y-1">
        {navigation.map((item) => (
          <NavigationLink key={item.name} item={item} />
        ))}
      </div>
      <div className="flex-1" />
      <Button
        onClick={logout}
        variant="ghost"
        className="flex w-full items-center gap-3 px-3 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 border-r px-4 py-6 lg:block">
        <Sidebar />
      </aside>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4">
          <SheetHeader>
            <SheetTitle>Dashboard</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}