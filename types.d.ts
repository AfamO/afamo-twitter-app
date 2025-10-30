interface Tweet {
    id?: string;
    user_id: string;
    content:string;
    followers: string[];
    created_at?: Date |undefined;
}

interface TweetShare {
    tweet_id: string;
    owner_user_id:string;
    shared_with_user_id:string;
}

interface User {
    user_id: string;
    name: string;
    email: string;
    address: string;
}


interface APiResponse<T=any> {
    success?:boolean | undefined;
    error?: string;
    data?: T;
    
}