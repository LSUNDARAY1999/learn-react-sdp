import { useState } from "react";
import ListItem from "./ListItem";

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 10;

export default function VirtualList({ items }) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleItems = items.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <div
      className="h-80 overflow-y-scroll border"
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * ITEM_HEIGHT }}>
        <div style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}>
          {visibleItems.map((item) => (
            <ListItem key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
