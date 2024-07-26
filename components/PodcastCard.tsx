import Image from "next/image";
import React from "react";

interface Props {
  id: string | number;
  title: string;
  description: string;
  imgURL: string;
}

const PodcastCard: React.FC<Props> = ({ description, id, imgURL, title }) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          alt={title}
          width={174}
          height={174}
          className="rounded-xl aspect-square h-fit w-full 2xl:size-[200px]"
        />
        <figcaption className="flex flex-col">
          <h3 className="text-16 truncate font-bold text-white-1">{title}</h3>
          <p className="text-12 truncate text-white-4 capitalize font-normal">
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default PodcastCard;
