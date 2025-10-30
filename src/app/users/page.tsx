"use client"

import UsersTable from "../components/UsersTable";
import { useCallback, useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

export default function Users() {
    const {isLoaded, isSignedIn, user} = useUser();
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userAddress, setUserAddress] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState([])

    //const router = useRouter();
    // Fetch Users
    const fetchUsers = useCallback(async () => {
      console.log("The clerk userId=="+user?.id)
      try {
        
        const res = await fetch(`/api/users?user_id=${user?.id}`);
        const data = await res.json();
        setUsers(data.user);
        console.log("Fetched Clerk Data::"+JSON.stringify(data));
      } catch(err) {
        console.log(err);
      }
    }, [user]);

    useEffect (()=>{
      if(user){
        fetchUsers()
      }
    }, [fetchUsers,user])
    // Create Users
    const createUser = async () => {
      setLoading(true);
		try {
			const res = await fetch("/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					  user_id: user?.id,
            name: userName,
            email: userEmail,
            address: userAddress,
				}),
			});
			const data = await res.json();
			alert(data.message);
      setUserAddress("");
      setUserEmail("");
      setUserName("");
      setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

    const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUser();
    }
    if(!isLoaded || !isSignedIn) {
        return <p>Loading...</p>
    }
    return (
        <div className='w-full'>
      <main className='min-h-[90vh] flex items-start'>
        <SideNav />
        <div className='md:w-5/6 w-full h-full p-6'>
          <h2 className='text-2xl font-bold'>Users</h2>
          <p className='opacity-70 mb-4'>Create and view all your followers</p>

          <form className='w-full' onSubmit={handleAddUser} method='POST'>
            <div className='w-full flex items-center space-x-4 mb-3'>
              <section className='w-1/2'>
                <label>UserName</label>
                <input
                  type='text'
                  id="userName"
                  className='w-full p-2 border border-gray-200 rounded-sm'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </section>

              <section className='w-1/2'>
                <label>Email Address</label>
                <input
                  type='email'
                  className='w-full p-2 border border-gray-200 rounded-sm'
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </section>
            </div>
            <label htmlFor='address'>Address</label>
            <textarea
              name='address'
              id='address'
              rows={3}
              className='w-full p-2 border border-gray-200 rounded-sm'
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
            <button
              className='bg-blue-500 text-white p-2 rounded-md mb-6'
              disabled={loading}
            >
              {loading ? "Adding..." : "Add User"}
            </button>
          </form>

          <UsersTable users={users} />
        </div>
      </main>
    </div>
    );
}