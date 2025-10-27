interface Tweet {
    id?: string;
    user_id: string;
    content:string;
    followers: [];
    created_at?: Date;
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

interface JWTPayload {
    id: Number;
    email:string;
    iat?: number;
    exp?: number
}

interface APiResponse<T=any> {
    success?:boolean;
    error?: string;
    data?: T;
    
}