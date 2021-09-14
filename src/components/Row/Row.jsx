import React from "react";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel";

function Row() {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeActiveItem = (activeItemIndex) => setActiveIndex(activeItemIndex);
  return (
    <div className="text-white row">
      <div className="container p-9">
        <h2 className="text-4xl mb-6">Title</h2>

        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          // Carousel configurations
          numberOfCards={7}
          gutter={20}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          // Active item configurations
          requestToChangeActive={changeActiveItem}
          activeItemIndex={activeIndex}
          activePosition={"center"}
          chevronWidth={24}
          rightChevron={">"}
          leftChevron={"<"}
          outsideChevron={false}
        >
          {[
            3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 4, 8, 8, 8, 3, 4, 5, 6, 7, 7, 8,
            8, 8, 8, 8, 8, 4, 8, 8, 8,
          ].map((im, i) => (
            <img
              key={i.toString()}
              className="my-2"
              alt={`${i}`}
              src="https://i.picsum.photos/id/15/200/300.jpg?hmac=lozQletmrLG9PGBV1hTM1PnmvHxKEU0lAZWu8F2oL30"
            />
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default Row;
