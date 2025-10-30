

export default function TweetsTable({tweetList}:{tweetList: Tweet[]}) {




    return (
        <table>
            <thead>
                <tr>
                    <th>Content</th>
                    <th>User Id</th>
                    <th>Created Date</th>
                </tr>

            </thead>
            <tbody>
                {tweetList.map((tweet) =>(
                    <tr key={tweet.id}>
                        <td className='text-sm'>{tweet.content}</td>
						<td className='text-sm'>{tweet.user_id}</td>
                        <td className='text-sm'>{tweet.created_at!=undefined?tweet.created_at.toDateString():'Created Date Unavailable'}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>

    )

}