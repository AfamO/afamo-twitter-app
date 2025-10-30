'use client'

import { useState, useEffect, useCallback } from "react"
import Link from "next/link";
import SideNav from "@/app/components/SideNav";
import { useUser } from "@clerk/nextjs";

export default function History() {
    //const[isLoaded, isSigned, user] = useUser();
    const[tweets, setTweets] = useState<Tweet[]>([]);

    return (
        <div className='w-full'>
        <main className='min-h-[90vh] flex items-start'>
        <SideNav />
        <div className='md:w-5/6 w-full h-full p-6'>
          <h2 className='text-2xl font-bold'>History</h2>
          <p className='opacity-70 mb-4'>View all your tweets and their status</p>

          {tweets.map((tweet) => (
            <div
              className='bg-blue-50 w-full mb-3 rounded-md p-3 flex items-center justify-between'
              key={tweet.id}
            >
              <div>
                <p className='text-sm text-gray-500 mb-2'>
                  Tweet - #0{tweet.id} sent to{" "}
                  <span className='font-bold'>{tweet.user_id}</span>
                </p>
                
              </div>
              <Link
                href={{
                  pathname: `/tweets/${tweet.id}`,
                  query: { user: tweet.user_id },
                }}
                className='bg-blue-500 text-blue-50 rounded p-3'
              >
                Preview
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
    );

}