import { FaRegPlayCircle } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import type { DataOfSections } from "@/store/types";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MdOutlineSlideshow } from "react-icons/md";
import { Button } from "@/components/ui/button";

interface AnimeBlockProps {
  data: DataOfSections;
}

interface HoverData {
  id?: string;
  title?: string;
  malID?: number;
  alID?: number;
  japaneseTitle?: string;
  image?: string;
  description?: string;
  type?: string;
  url?: string;
  subOrDub?: string;
  hasSub?: boolean;
  hasDub?: boolean;
  totalEpisodes?: number;
  episodes?: any[];
  recommendations?: any[];
  relatedAnime?: any[];
}

function AnimeBlock({ data }: AnimeBlockProps) {
  const [hoverData, setHoverData] = useState<HoverData | null>(null);

  const [trackMouse, setTrackMouse] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/anime/zoro/info?id=${data.id}`)
      .then((res) => res.json())
      .then((data) => setHoverData(data));
  }, [trackMouse]);

  return (
    <>
      <HoverCard openDelay={0} closeDelay={50}>
        <HoverCardContent
          side={"left" || "right"}
          className="h-[300px] w-[300px] bg-[#0f1010] "
        >
          {hoverData ? (
            <div className="text-white h-full w-full ">
              <div
                id="description"
                className={` h-[45%] overflow-hidden text-[12px] ${
                  hoverData.description == undefined ? "text-red-400" : ""
                }`}
              >
                {hoverData.description == undefined
                  ? "Loading... Or failed to load please re-enter Mouse at this card"
                  : hoverData.description?.slice(0, 220) + "....."}
              </div>
              <div
                id="animeInfo"
                className="  text-[#96e1a9] h-[40%] w-full text-sm px-2 "
              >
                <div>
                  <span className="text-[#B4CDE6]">Title:</span>{" "}
                  {hoverData.title}
                </div>
                <div>
                  <span className="text-[#B4CDE6]">Type:</span> {hoverData.type}
                </div>
                <div>
                  {" "}
                  <span className="text-[#B4CDE6]">Total Episodes: </span>{" "}
                  {hoverData.totalEpisodes}
                </div>
                <div>
                  <span>
                    <span className="text-[#B4CDE6]">Sub:</span>{" "}
                    {hoverData.hasSub ? "yes" : "no"}
                  </span>{" "}
                  <span>
                    <span className="text-[#B4CDE6]">Dub</span>{" "}
                    {hoverData.hasDub ? "yes" : "no"}
                  </span>
                </div>
              </div>
              <div id="epInfoAndWatch" className="h-[15%] w-full">
                <Button
                  variant="outline"
                  className="w-full h-full bg-transparent"
                >
                  Watch <MdOutlineSlideshow className="h-6 w-6 ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-white">Loading</div>
          )}
        </HoverCardContent>

        <div className="w-72 h-28 flex  justify-center gap-2 bg-[#222831] rounded-lg shadow p-2 overflow-hidden font-f1 text-white cursor-pointer min-w-[300px]  ">
          <div
            onMouseEnter={() => setTrackMouse((prev) => !prev)}
            className="flex gap-2 bg-neutral-500 w-20 h-5/5 shrink-0 rounded-lg bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
          <div className="flex w-full flex-col items-start justify-end">
            <HoverCardTrigger
              className={`ml-1  hover:text-[#96e1a9]  ${
                data.title.length < 20
                  ? "mb-4"
                  : data.title.length < 40
                  ? "mb-2"
                  : "mb-2 text-sm"
              }`}
              onMouseEnter={() => setTrackMouse((prev) => !prev)}
            >
              <span id="title">{data.title}</span>
            </HoverCardTrigger>
            <div className="h-6 w-full  flex justify-between">
              <div
                id="epInfo"
                className=" h-full flex items-center border border-[#5a5858] px-4 gap-1 rounded-xl"
              >
                <FaRegPlayCircle className="h-3 w-3  text-[#96e1a9] " />
                {data.sub}
              </div>
              <div id="type" className="flex items-center gap-0.5">
                <GoDot className="h-3 w-3 mt-0.5 text-[#817f7f]" />
                <span className="text-[#d1cbcb]">{data.type}</span>
              </div>
            </div>
          </div>
        </div>
      </HoverCard>
    </>
  );
}

export default AnimeBlock;
