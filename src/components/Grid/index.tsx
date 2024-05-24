'use client';

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { gridItems } from "@/data"

const Grid = () => {

  return (
    <section id="about">
      <BentoGrid>

        {gridItems.map(({
          
            id, 
            title, 
            titleClassName, 
            description, 
            className, 
            img, 
            imgClassName,
            spareImg

          }, index) => (

            <BentoGridItem 
            
              key={index}
              id={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}

            />
        ))}

      </BentoGrid>
    </section>
  );
}

export default Grid;
