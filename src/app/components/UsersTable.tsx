
interface User {
     name: string;
     email: string;
     id: number;
}

export default function CustomersTable({
    users,
}: {
    users: User[];
}) {

    const deleteUser = async (id:number) => {
        try {
            const request = await fetch(`/api/users?id=${id}`, {
                method: "DELETE",
            })
            const response = await request.json();
            alert(response.message)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {users.length > 0 && users.map((user) =>(
                    <tr key={user.id}>
                        <td className='text-sm'>{user.name}</td>
						<td className='text-sm'>{user.email}</td>
						<td className='text-sm'>
							<button className='p-2 bg-red-500 text-red-50  text-xs rounded-sm' onClick={()=> deleteUser(user.id)}>
								Delete
							</button>
						</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )

}