"use client"

import TweetsTable  from "../components/TweetsTable";
import React, {useState,  useEffect, useCallback} from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs"; 
import SideNav from "../components/SideNav";

export default function Dashboard() {
    //const {isLoaded, isSignedIn, user} = useUser();
    const [tweetList, setTweetList] = useState<Tweet[]>([]);
    const [recipient, setRecipient] = useState<string>("");
    const [user, setUser] = useState<User>();
    const [userId, setUserId] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [createdAt, setCreateAt] = useState<Date>();
    const [tweetQuantity, setTweetQuantity] = useState<number>(1);
    const [users, setUsers] = useState([]);

    const router = useRouter();

    const handleAddItem = (e:React.FormEvent) => {
        e.preventDefault();
        if (content.trim() && tweetQuantity >=1) {
            setTweetList([
                ...tweetList,
                {
                    id: Math.random().toString(36).substring(2,9),
                    content:content,
                    user_id:userId,
                    tweet_quantity:tweetQuantity,
                    created_at:new Date(),
                },
            ]);
        }
        setContent("");
        setUserId("");
        setTweetQuantity(0);
    };
    
    

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call createInvoice() 
    };
    
    return (
    <div className='w-full'>
      <main className='min-h-[90vh] flex items-start'>
        <SideNav />
        <div className='md:w-5/6 w-full h-full p-6'>
          <h2 className='font-bold text-2xl mb-3'>Post new tweets</h2>

          <form className='w-full flex flex-col' onSubmit={handleFormSubmit}>
            <label htmlFor='user'>Tweet Recipient</label>
            <select
              className='border-[1px] p-2 rounded-sm mb-3'
              required
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            >
              {users.map((user: any) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>

            <label htmlFor='title'>Content</label>
            <input
              className='border-[1px] rounded-sm mb-3 py-2 px-3'
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className='w-full flex justify-between flex-col'>
              <h3 className='my-4 font-bold'>Most Recent Tweets</h3>

              <div className='flex space-x-3'>

                <div className='flex flex-col justify-center w-1/4'>
                  
                  <input
                    type='hidden'
                    name='tweetOwner'
                    value={userId}
                    onChange={(e) => setUserId(user.user_id)}
                  />
                </div>
              </div>
              <button
                className='bg-blue-500 text-gray-100 w-[100px] p-2 rounded'
                onClick={handleAddItem}
              >
                Add Tweet
              </button>
            </div>

            <TweetsTable tweetList={tweetList} />
            <button
              className='bg-blue-800 text-gray-100 w-full p-4 rounded my-6'
              type='submit'
            >
              POST & PREVIEW TWEET
            </button>
          </form>
        </div>
      </main>
    </div>
  );

}