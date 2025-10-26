import React from "react";

import { getDBVersion } from "./db";
import Link from "next/link";

export default async function HomePage() {
  const {version} = await getDBVersion();
  console.log("DB Version::"+version)
  return (
    <main className="w-full">
      <section className="p-8 h-[90vh] md:w-2/3 mx-auto text-center w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">
          Post Tweets for your followers
        </h2>
        <p className="opacity-70 mb-4 text-sm md:text-base leading-loose">
          Afam's Tweeter is an online tweeting software that helps you create and
          tweets for your friends and followers for free! Keep your
          friends and followers update with the latest events.
        </p>
        <Link
        href='/dashboard'
        className="rounded w-[200px] px-2 py-3 bg-blue-500 text-gray-50"
        >
          LOGIN
        </Link>
        </section> 
    </main>
     );

}