"use client";
import { SearchField } from "@heroui/react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Searchbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("title") || "");

  return (
    <SearchField name="search">
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input
          className="w-100"
          placeholder="Case sensitive full-title search (JSON-Server issue)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            router.push(`/all-tiles?title=${e.target.value}`);
          }}
        />
        <SearchField.ClearButton
          onClick={() => {
            setSearch("");
            router.push(`/all-tiles`);
          }}
        />
      </SearchField.Group>
    </SearchField>
  );
}
