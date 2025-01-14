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
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import useHeader from "@/hooks/useHeader";

const navigation = [
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const { logout } = useHeader();

  const NavigationLink = ({
    item,
    onClose,
  }: {
    item: (typeof navigation)[0];
    onClose?: () => void;
  }) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.href;

    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center justify-between rounded-lg px-4 py-3",
          "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
          "hover:bg-gray-50 dark:hover:bg-gray-800/50",
          "transition-all duration-200 ease-in-out",
          "group relative",
          isActive &&
            "bg-primary/10 text-primary hover:text-primary dark:text-primary dark:hover:text-primary"
        )}
        onClick={onClose}
      >
        <div className="flex items-center gap-3">
          <Icon
            className={cn(
              "h-5 w-5",
              isActive
                ? "text-primary"
                : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
            )}
          />
          <span className="font-medium">{item.name}</span>
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 opacity-0 -translate-x-2",
            "group-hover:opacity-100 group-hover:translate-x-0",
            "transition-all duration-200",
            isActive
              ? "text-primary opacity-100 translate-x-0"
              : "text-gray-400"
          )}
        />
      </Link>
    );
  };

  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <div className="flex flex-col h-full">
      {/* User Profile Section */}
      <div className="px-4 py-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-2 ring-primary/10">
            <AvatarImage src={user?.profilePicture} alt={user?.name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-lg truncate text-gray-900 dark:text-gray-100">
              {user?.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavigationLink key={item.name} item={item} onClose={onClose} />
          ))}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="border-t border-gray-100 dark:border-gray-700 p-4">
        <Button
          onClick={() => {
            logout();
            onClose?.();
          }}
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 px-4 py-3",
            "text-red-500 hover:text-red-600 hover:bg-red-50",
            "dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/10"
          )}
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Button>
      </div>
    </div>
  );

  const MenuButton = () => (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "lg:hidden fixed left-4 top-4 z-40",
        "h-10 w-10 rounded-full",
        "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        "border border-gray-200 dark:border-gray-800",
        "shadow-sm hover:shadow-md transition-all",
        "dark:bg-gray-800/90 dark:supports-[backdrop-filter]:bg-gray-800/60",
        "hover:bg-gray-50 dark:hover:bg-gray-700/50",
        isMobileMenuOpen && "hidden bg-gray-100 dark:bg-gray-700"
      )}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Open menu</span>
    </Button>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r bg-white dark:bg-gray-800 px-4 py-6 fixed h-full overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger>
          <MenuButton />
        </SheetTrigger>
        <SheetContent
          side="left"
          className={cn(
            "w-80 p-0", // Remove padding to allow custom sections
            "bg-white dark:bg-gray-800",
            "overflow-hidden" // Hide overflow for inner scrolling
          )}
        >
          <SheetClose
            className={cn(
              "absolute right-2 top-2 rounded-full p-2",
              "opacity-70 hover:opacity-100 transition-opacity",
              "bg-gray-100 dark:bg-gray-700",
              "hover:bg-gray-200 dark:hover:bg-gray-600",
              "z-50" // Ensure it's above other content
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
