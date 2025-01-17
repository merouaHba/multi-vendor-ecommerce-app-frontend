import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import {
  Store,
  Package,
  BarChart3,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Star,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  DollarSign,
  Truck,
  HelpCircle,
  Target,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import useHeader from "@/hooks/useHeader";
import SearchDialog from "@/components/vendor/DashboardSearch";

type NavigationItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }> | null;
  badge?: {
    text: string;
    variant:
      | "destructive"
      | "default"
      | "outline"
      | "secondary"
      | null
      | undefined;
  } | null;
  submenu?: NavigationItem[];
};

const navigation: NavigationItem[] = [
  {
    name: "Store Overview",
    href: "/seller/dashboard/overview",
    icon: Store,
    badge: null,
  },
  {
    name: "Products",
    href: "/seller/dashboard/products",
    icon: Package,
    submenu: [
      { name: "All Products", href: "/seller/dashboard/products" },
      { name: "Add New", href: "/seller/dashboard/products/new" },
      { name: "Categories", href: "/seller/dashboard/products/categories" },
      { name: "Inventory", href: "/seller/dashboard/products/inventory" },
      { name: "Reviews & Ratings", href: "/seller/dashboard/products/reviews" },
      { name: "Bulk Upload", href: "/seller/dashboard/products/bulk-upload" },
    ],
  },
  {
    name: "Orders",
    href: "/seller/dashboard/orders",
    icon: ShoppingBag,
    badge: { text: "12", variant: "destructive" },
    submenu: [
      { name: "All Orders", href: "/seller/dashboard/orders" },
      { name: "Pending", href: "/seller/dashboard/orders/pending" },
      { name: "Processing", href: "/seller/dashboard/orders/processing" },
      { name: "Shipped", href: "/seller/dashboard/orders/shipped" },
      { name: "Delivered", href: "/seller/dashboard/orders/delivered" },
      { name: "Cancelled", href: "/seller/dashboard/orders/cancelled" },
      { name: "Returns", href: "/seller/dashboard/orders/returns" },
    ],
  },
  {
    name: "Finance",
    href: "/seller/dashboard/finance",
    icon: DollarSign,
    submenu: [
      { name: "Earnings", href: "/seller/dashboard/finance/earnings" },
      { name: "Payouts", href: "/seller/dashboard/finance/payouts" },
      { name: "Statements", href: "/seller/dashboard/finance/statements" },
      { name: "Tax Information", href: "/seller/dashboard/finance/tax" },
    ],
  },
  {
    name: "Analytics",
    href: "/seller/dashboard/analytics",
    icon: BarChart3,
    submenu: [
      { name: "Sales Analytics", href: "/seller/dashboard/analytics/sales" },
      {
        name: "Product Performance",
        href: "/seller/dashboard/analytics/products",
      },
      {
        name: "Customer Insights",
        href: "/seller/dashboard/analytics/customers",
      },
      { name: "Traffic Sources", href: "/seller/dashboard/analytics/traffic" },
    ],
  },
  {
    name: "Marketing",
    href: "/seller/dashboard/marketing",
    icon: Target,
    submenu: [
      { name: "Promotions", href: "/seller/dashboard/marketing/promotions" },
      { name: "Coupons", href: "/seller/dashboard/marketing/coupons" },
      { name: "Flash Sales", href: "/seller/dashboard/marketing/flash-sales" },
      { name: "Campaigns", href: "/seller/dashboard/marketing/campaigns" },
    ],
  },
  {
    name: "Shipping",
    href: "/seller/dashboard/shipping",
    icon: Truck,
    submenu: [
      { name: "Settings", href: "/seller/dashboard/shipping/settings" },
      { name: "Zones", href: "/seller/dashboard/shipping/zones" },
      { name: "Methods", href: "/seller/dashboard/shipping/methods" },
      { name: "Labels", href: "/seller/dashboard/shipping/labels" },
    ],
  },
  {
    name: "Customers",
    href: "/seller/dashboard/customers",
    icon: Users,
    submenu: [
      { name: "All Customers", href: "/seller/dashboard/customers" },
      { name: "Customer Groups", href: "/seller/dashboard/customers/groups" },
      { name: "Reviews", href: "/seller/dashboard/customers/reviews" },
    ],
  },
  {
    name: "Messages",
    href: "/seller/dashboard/messages",
    icon: MessageSquare,
    badge: { text: "5", variant: "default" },
  },
  {
    name: "Settings",
    href: "/seller/dashboard/settings",
    icon: Settings,
    submenu: [
      { name: "Store Profile", href: "/seller/dashboard/settings/profile" },
      { name: "Account", href: "/seller/dashboard/settings/account" },
      { name: "Security", href: "/seller/dashboard/settings/security" },
      {
        name: "Notifications",
        href: "/seller/dashboard/settings/notifications",
      },
      { name: "API Keys", href: "/seller/dashboard/settings/api" },
    ],
  },
  {
    name: "Help & Support",
    href: "/seller/dashboard/support",
    icon: HelpCircle,
    submenu: [
      { name: "Documentation", href: "/seller/dashboard/support/docs" },
      { name: "FAQs", href: "/seller/dashboard/support/faqs" },
      { name: "Contact Support", href: "/seller/dashboard/support/contact" },
    ],
  },
];



export default function SellerDashboardLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = React.useState<string | null>(
    null
  );
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const { user } = useAppSelector((state) => state.auth);
  const { logout } = useHeader();


  const NavigationLink = ({ item, onClose, isSubmenuItem = false }: { item: NavigationItem; onClose?: () => void; isSubmenuItem?: boolean }) => {
    const Icon = "icon" in item ? item.icon : null;
    const isActive = location.pathname === item.href;
    const hasSubmenu = "submenu" in item && item.submenu;
    const isExpanded = expandedSubmenu === item.name;

    return (
      <div className="relative group">
        <Link
          to={hasSubmenu ? "#" : item.href}
          className={cn(
            "flex items-center justify-between rounded-xl px-4 py-3",
            "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            "hover:bg-gray-50 dark:hover:bg-gray-800/50",
            "transition-all duration-200 ease-in-out",
            "relative overflow-hidden",
            isSubmenuItem && "pl-9",
            isActive &&
              "bg-primary/10 text-primary hover:text-primary dark:text-primary dark:hover:text-primary",
            "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1",
            "before:rounded-l-xl before:transition-all before:duration-200",
            isActive && "before:bg-primary"
          )}
          onClick={(e) => {
            if (hasSubmenu) {
              e.preventDefault();
              setExpandedSubmenu(isExpanded ? null : item.name);
            } else {
              onClose?.();
            }
          }}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div
                className={cn(
                  "p-2 rounded-lg transition-colors duration-200",
                  isActive ? "bg-primary/20" : "bg-gray-100 dark:bg-gray-800"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isActive
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
                  )}
                />
              </div>
            )}
            <span className="font-medium">{item.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {"badge" in item && item.badge && (
              <Badge
                variant={item.badge.variant}
                className={cn(
                  "rounded-full px-2.5 py-0.5",
                  "transition-transform duration-200 group-hover:scale-110"
                )}
              >
                {item.badge.text}
              </Badge>
            )}
            {hasSubmenu && (
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isExpanded && "rotate-90"
                )}
              />
            )}
          </div>
        </Link>
        {hasSubmenu && isExpanded && (
          <div className="mt-1 space-y-1 animate-slideDown">
            {item.submenu?.map((subItem: NavigationItem) => (
              <NavigationLink
                key={subItem.name}
                item={subItem}
                onClose={onClose}
                isSubmenuItem
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="px-4 py-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Avatar className="h-14 w-14 ring-2 ring-primary/10 transition-transform duration-200 group-hover:scale-105">
              <AvatarImage
                src={user?.profilePicture}
                alt={user?.storeName || user?.name}
              />
              <AvatarFallback className="bg-primary/10 text-primary">
                {(user?.storeName || user?.name)
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-lg truncate text-gray-900 dark:text-gray-100">
              {user?.storeName || user?.name}
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1 group">
                <ShieldCheck className="h-3 w-3 transition-colors duration-200 group-hover:text-primary" />
                Verified Seller
              </Badge>
              <Badge variant="secondary" className="gap-1 group">
                <Star className="h-3 w-3 text-yellow-500 transition-transform duration-200 group-hover:scale-125" />
                4.8
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}

      <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left text-sm">Search dashboard...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-white px-1.5 font-mono text-xs text-gray-500 dark:bg-gray-900">
            ⌘K
          </kbd>
        </button>
      </div>
      {/* Alerts Section */}
      <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/10 rounded-xl">
          <div className="flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-yellow-600 dark:text-yellow-500">
              Low Stock Alert
            </p>
            <p className="text-xs text-yellow-600/80 dark:text-yellow-500/80">
              5 products need attention
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg hover:bg-yellow-200/50 dark:hover:bg-yellow-700/30"
          >
            <ChevronRight className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
          </Button>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <nav className="space-y-1.5">
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
            "w-full justify-start gap-3 px-4 py-3 rounded-xl",
            "text-red-500 hover:text-red-600 hover:bg-red-50",
            "dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/10",
            "transition-all duration-200 group"
          )}
        >
          <LogOut className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="font-medium">Logout</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 fixed h-full overflow-hidden hover:overflow-y-auto transition-all duration-200">
        <Sidebar />
      </aside>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "lg:hidden fixed left-4 top-4 z-40",
              "h-10 w-10 rounded-xl",
              "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60",
              "border border-gray-200 dark:border-gray-700",
              "shadow-sm hover:shadow-md transition-all duration-200",
              "dark:bg-gray-800/90 dark:supports-[backdrop-filter]:bg-gray-800/60",
              "hover:bg-gray-50 dark:hover:bg-gray-700/50"
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-80 p-0 bg-white dark:bg-gray-800"
        >
          <SheetClose className="absolute right-2 top-2 rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
          <SearchDialog isSearchOpen={isSearchOpen } setIsSearchOpen={setIsSearchOpen } />
    </div>
  );
}
