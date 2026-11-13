import React from "react";
import { ListLoadingSkeleton } from "@/components/ui/ListLoadingSkeleton";

export default function ProductsLoading() {
  return (
    <ListLoadingSkeleton
      columns={4}
      cardCount={8}
      showSubnav={true}
      showFilterBar={true}
      type="product"
    />
  );
}
