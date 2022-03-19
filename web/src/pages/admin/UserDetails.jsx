import React, { useState } from "react"; 
import {
    Button,
    TableRow,
    TableCell,
    Select,
    MenuItem,
    FormControl,
} from "@material-ui/core";


export const UserDetails = (user) => {
    
    const [mentor, setMentor] = useState('');
    const [rol, setRol] = useState('');

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
        'Staff'
    ];

    const handleMentorChange = (event) => {
        setMentor(event.target.value);
    };

    const handleRolChange = (event) => {
        setRol(event.target.value);
    };
    
    return ( 
        <TableRow hover key={user.value.id}>
            <TableCell>{`${user.value.firstName} ${user.value.lastName}`}</TableCell>
            <TableCell>{user.value.email}</TableCell>
            <TableCell>
                <FormControl  style={{ m: 1, minWidth: 150 }}>
                    <Select
                    id={user.value.id}
                    value={mentor}
                    onChange={handleMentorChange}>
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
                    id={user.value.id}
                    value={rol}
                    onChange={handleRolChange}>
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