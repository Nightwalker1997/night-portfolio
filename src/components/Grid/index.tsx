'use client';

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { gridItems } from "@/data"

const Grid = () => {

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem 
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
