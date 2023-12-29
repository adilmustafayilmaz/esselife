'use client'
import TextComponent from '@/components/TextComponent'
import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Applications() {
  return (
    <>
      <div className='flex flex-col'>


        <div className='lg:flex max-lg:flex-col lg:justify-around'>
          <TextComponent header='Işık' imageName='/isik.jpeg' imageStyle={{ objectFit: "cover" }} style="bg-[#F2FFE9]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
              laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur f
              uga ad laborum voluptates eveniet, porro officia magni explicabo impedit nostrum. Sint fa
              cere quam exercitationem amet similique nulla harum nam. Ea magni similique expedita in mo
              lestiae esse. Dolores repudiandae ullam eveniet tempora fugiat labore est placeat accusanti
              um iste! Officia amet nobis repudiandae suscipit accusantium consequatur facilis ad beatae,
              ratione eius soluta sint delectus totam similique, ducimus voluptas quas. Explicabo archi
              tecto voluptatibus ullam animi qui delectus enim, iure quo nemo fuga. Cumque in beatae nisi
              doloribus maxime, molestiae nam. Voluptate.
            </p>

          </TextComponent>
        </div>
        
        <div className='lg:flex max-lg:flex-col lg:justify-around'>
          <TextComponent header='Hypervolt' imageName='/hypervolt1.jpeg' style='bg-[#F2FFE9]' imageStyle={{ objectFit: "cover" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
              laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur f
              uga ad laborum voluptates eveniet, porro officia magni explicabo impedit nostrum. Sint fa
              cere quam exercitationem amet similique nulla harum nam. Ea magni similique expedita in mo
              lestiae esse. Dolores repudiandae ullam eveniet tempora fugiat labore est placeat accusanti
              um iste! Officia amet nobis repudiandae suscipit accusantium consequatur facilis ad beatae,
              ratione eius soluta sint delectus totam similique, ducimus voluptas quas. Explicabo archi
              tecto voluptatibus ullam animi qui delectus enim, iure quo nemo fuga. Cumque in beatae nisi
              doloribus maxime, molestiae nam. Voluptate.
            </p>

          </TextComponent>


          <TextComponent header='Elektrik' imageName='/elektrik.jpeg' imageStyle={{ objectFit: "cover" }} style="bg-[#F2FFE9]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
              laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur f
              uga ad laborum voluptates eveniet, porro officia magni explicabo impedit nostrum. Sint fa
              cere quam exercitationem amet similique nulla harum nam. Ea magni similique expedita in mo
              lestiae esse. Dolores repudiandae ullam eveniet tempora fugiat labore est placeat accusanti
              um iste! Officia amet nobis repudiandae suscipit accusantium consequatur facilis ad beatae,
              ratione eius soluta sint delectus totam similique, ducimus voluptas quas. Explicabo archi
              tecto voluptatibus ullam animi qui delectus enim, iure quo nemo fuga. Cumque in beatae nisi
              doloribus maxime, molestiae nam. Voluptate.
            </p>

          </TextComponent>
        </div>


      </div>
    </>
  )
}
