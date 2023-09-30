import Image from "next/image";
import Link from "next/link";
import { getVideos } from "./firebase/functions";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main
      className="flex min-h-screen flex-col 
    items-center justify-between p-24"
    >
      {videos &&
        videos.map((video) => (
          <Link href={`/watch?v=${video.filename}`} key={video.id}>
            <Image
              src={"/thumbnail.png"}
              alt="video"
              width={120}
              height={80}
              className="m-3"
            />
          </Link>
        ))}
    </main>
  );
}
