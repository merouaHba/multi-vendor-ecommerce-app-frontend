import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight, Clock } from "lucide-react";
import { Command } from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DashboardSearchProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

export const DashboardSearch = ({ isSearchOpen, setIsSearchOpen }: DashboardSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const navigate = useNavigate();

  const searchCategories = {
    orders: {
      title: "Orders",
      items: [
        {
          id: "recent-orders",
          name: "Recent Orders",
          path: "/seller/dashboard/orders",
        },
        {
          id: "pending-orders",
          name: "Pending Orders",
          path: "/seller/dashboard/orders/pending",
        },
        {
          id: "returns",
          name: "Returns & Refunds",
          path: "/seller/dashboard/orders/returns",
        },
      ],
    },
    products: {
      title: "Products",
      items: [
        {
          id: "add-product",
          name: "Add New Product",
          path: "/seller/dashboard/products/new",
        },
        {
          id: "inventory",
          name: "Low Stock Items",
          path: "/seller/dashboard/products/inventory",
        },
        {
          id: "categories",
          name: "Categories",
          path: "/seller/dashboard/products/categories",
        },
      ],
    },
    quickActions: {
      title: "Quick Actions",
      items: [
        {
          id: "create-coupon",
          name: "Create New Coupon",
          path: "/seller/dashboard/marketing/coupons/new",
        },
        {
          id: "shipping-label",
          name: "Print Shipping Label",
          path: "/seller/dashboard/shipping/labels",
        },
        {
          id: "support",
          name: "Contact Support",
          path: "/seller/dashboard/support/contact",
        },
      ],
    },
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchSelect = (item: SearchItem) => {
    setIsSearchOpen(false);
    navigate(item.path);
    setRecentSearches((prev: SearchItem[]) => {
      const updated = [item, ...prev.filter((i) => i.id !== item.id)].slice(
        0,
        5
      );
      localStorage.setItem("recentSearches", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  interface SearchItem {
    id: string;
    name: string;
    path: string;
  }


  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent className="p-0 max-w-2xl">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3 gap-2">
            <Search className="h-4 w-4 shrink-0 text-gray-500" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-12 bg-transparent outline-none placeholder:text-gray-500"
              placeholder="Type a command or search..."
            />
            <kbd
              onClick={() => setIsSearchOpen(false)}
              className="hidden sm:inline-flex items-center cursor-pointer z-50 bg-white gap-1 rounded border px-2 text-xs"
            >
              ESC
            </kbd>
          </div>

          <div className="py-4 px-2">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-4">
                <p className="px-2 text-sm font-medium text-gray-500">
                  Recent Searches
                </p>
                <div className="mt-2">
                  {recentSearches.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSearchSelect(item)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Categories */}
            {Object.entries(searchCategories).map(([key, category]) => (
              <div key={key} className="mb-4">
                <p className="px-2 text-sm font-medium text-gray-500">
                  {category.title}
                </p>
                <div className="mt-2">
                  {category.items
                    .filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSearchSelect(item)}
                        className="w-full flex items-center justify-between px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardSearch;
