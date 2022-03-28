import React, { useState } from "react"; 
import {
    Button,
    TableRow,
    TableCell,
    Select,
    MenuItem,
    FormControl,
} from "@material-ui/core";
//import axios from "axios";


export const UserDetails = (user) => {
    
    const [mentor, setMentor] = useState(user.value.mentor);
    const [rol, setRol] = useState(user.value.role);

    const mentors = [
        { id: 0, name:""},
        { id: 1, name: "Alexandra Robinson"},
        { id: 2, name: "Roberta Lee"},
        { id: 3, name: "Clara Boyd"},
        { id: 4, name: "Christina Martin"},
        { id: 5, name: "Sofia Ronald"},
        { id: 6, name: "Anna Frank"},
        { id: 7, name: "Melissa Loyd"},
        { id: 8, name: "Layla N. Martinovic"},
        { id: 9, name: "Ruth Nolan"},
    ];

      const roles = [
        '',
        'Admin',
        'Mentee',
        'Mentor',
        'Staff',
        'user',
        'admin',
        'mentor'
    ];

    const handleMentorChange = (userId) => ( event ) => {
        let value = event.target.value;
        setMentor(value);
        /* Update information into DB
            axios
                .post("/api/user/update", {_id:{userId}, mentor: {value}})
                .then((res) => {
                    console.log('All good')
                })
                .catch((e) => console.log(e.message));
        */
    };

    const handleRolChange = (userId) => ( event ) => {
        let value = event.target.value;
        setRol(value);
    };
    
    return ( 
        <TableRow hover key={user.value._id}>
            <TableCell>{`${user.value.firstName} ${user.value.lastName}`}</TableCell>
            <TableCell>{user.value.email}</TableCell>
            <TableCell>
                <FormControl  style={{ m: 1, minWidth: 150 }}>
                    <Select
                    id={user.value._id}
                    value={mentor}
                    onChange={handleMentorChange(user.value._id)}>
                        {mentors.map((mentor) => (
                            <MenuItem
                            key={mentor.id}
                            value={mentor.name}
                            >
                            {mentor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
            <FormControl  style={{ m: 1, minWidth: 70 }}>
                    <Select
                    id={user.value._id}
                    value={rol}
                    onChange={handleRolChange(user.value._id)}>
                        {roles.map((rol) => (
                            <MenuItem
                            key={rol}
                            value={rol}
                            >
                            {rol}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <Button variant="contained">Delete</Button>
            </TableCell>
        </TableRow>
     );
}