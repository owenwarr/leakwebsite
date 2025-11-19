// src/components/SearchDialog.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function normalize(s: string) {
  return s.toLowerCase().trim();
}

// Lightweight scoring: title match > keyword match > path match
function score(item: SearchItem, q: string) {
  const n = normalize(q);
  if (!n) return 0;
  let s = 0;
  if (normalize(item.title).includes(n)) s += 3;
  if (item.keywords?.some(k => normalize(k).includes(n))) s += 2;
  if (normalize(item.path).includes(n)) s += 1;
  return s;
}

export default function SearchDialog({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      // slight delay to ensure focus after mount
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    const ranked = searchIndex
      .map(item => ({ item, s: score(item, query) }))
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map(r => r.item);
    return ranked.slice(0, 10);
  }, [query]);

  const go = (item: SearchItem) => {
    onClose();
    navigate(item.path);
    // scroll to top on navigate
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
    if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active]);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      {/* Panel */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
            <Search className="w-5 h-5 text-slate-500" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search pages… (Ctrl/⌘ + K)"
              className="w-full outline-none bg-transparent text-sm py-2"
            />
            <button
              className="p-1 rounded hover:bg-slate-100"
              onClick={onClose}
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <ul className="max-h-80 overflow-y-auto">
            {results.length === 0 && (
              <li className="px-4 py-6 text-sm text-slate-500 text-center">No matches</li>
            )}
            {results.map((r, i) => (
              <li key={r.path}>
                <button
                  onClick={() => go(r)}
                  className={`w-full text-left px-4 py-3 flex flex-col hover:bg-slate-50 ${
                    i === active ? "bg-slate-50" : ""
                  }`}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="text-sm font-medium text-slate-900">{r.title}</span>
                  <span className="text-xs text-slate-500">{r.path}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Optional hook to open with Ctrl/⌘+K and "/" like many sites
export function useSearchHotkeys(open: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isModK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      const isSlash = !e.ctrlKey && !e.metaKey && e.key === "/";
      if (isModK || isSlash) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
}
