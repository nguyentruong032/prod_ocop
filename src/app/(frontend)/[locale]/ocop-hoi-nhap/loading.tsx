import React from "react";
import { ListLoadingSkeleton } from "@/components/ui/ListLoadingSkeleton";

export default function IntegrationLoading() {
  return (
    <ListLoadingSkeleton
      columns={3}
      cardCount={6}
      showSubnav={true}
      showFilterBar={true}
      type="article"
    />
  );
}
