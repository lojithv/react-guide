// src/components/UserList.js
import React, { useState, useEffect } from "react";
import { from, map } from "rxjs";

function UserList() {
  const [users, setUsers] = useState([] as any[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      // Create an observable from the fetched data
      const userObservable = from(data);

      // Use RxJS operators to transform the data
      userObservable
        .pipe(map((user: any) => user?.name))
        .subscribe((userName: any) =>
          setUsers((prevUsers: any[]) => [...prevUsers, userName])
        );
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
