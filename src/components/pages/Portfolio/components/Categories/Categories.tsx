"use client";
import React, { use } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CategoryType } from "@/types";

interface Props {
  categories: Promise<{ data: CategoryType[] }>;
  query?: string;
}
const Categories: React.FC<Props> = ({ categories, query }) => {
  const res = use(categories);
  const searchParams = useSearchParams();
  console.log("🚀 ~ searchParams:", query);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex flex-wrap gap-4-xs">
      <li>
        <button
          className={`category-btn ${!query ? "active" : ""}`}
          onClick={handleClearSearch}
        >
          Show all
        </button>
      </li>
      {res.data.map((category) => {
        const normalizedText =
          category.category[0].toUpperCase() + category.category.slice(1);
        return (
          <li key={category.id}>
            <button
              className={`category-btn ${
                query === category.category ? "active" : ""
              }`}
              onClick={() => handleSearch(category.category)}
            >
              {normalizedText}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
