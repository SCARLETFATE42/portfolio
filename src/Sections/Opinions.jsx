import { cn } from "../utils/utils";
import { Marquee } from "../components/Marquee";
import { Box, Text } from "@mantine/core";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.im.ge/2025/06/25/JSEqvq.ai-digital-art-image-character-illustration.jpeg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.im.ge/2025/06/26/JSeETa.sigma.jpeg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.im.ge/2025/06/25/JSEDV1.generated-file-name.jpeg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.im.ge/2025/06/25/JSEAgy.iphone.jpeg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.im.ge/2025/06/26/JSexLJ.jenny.jpeg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.im.ge/2025/06/26/JSe6tT.Some-Exciting-profile-picture-part-2.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full min-w-[15rem] sm:min-w-[16rem] w-full max-w-xs cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 border-gray-50/[.1] hover:bg-indigo-700 hover:animate-pulse",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full bg-white/10" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-200">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
    <Box className='items-start mt-35 md:mt-65'>
      <Text className="!font-bold !text-4xl !text-white !m-20">Hear From My Clients</Text>
    <div className="relative flex w-full max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden my-12 px-4 sm:px-6 lg:px-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Fading shadow edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-20" />
    </div>
    </Box>
    </>
  );
}
