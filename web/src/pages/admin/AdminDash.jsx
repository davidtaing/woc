import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Container,
    Card,
    CardContent,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Typography,
} from "@material-ui/core";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { UserDetails } from "./UserDetails";

/* 
    alright what is this for
    - main dashboard for administration operations
    - copy a dashboard template
    - use routing for mores page change thing
    
    TODO:
    - for demo have a show all users
    - delete users
*/

const AdminDash = () => {
    const [users, SetUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/user/all").then((res) => {
            SetUsers(res.data);
        });
    }, []);

    const ShowList = () => {
        if (!users) {
            console.log("no");
            return <>a</>;
        } else {
            return <UsersList users={users}/>;
        }
    };


    return (
        <AdminLayout>
            {/* route this part -------------------- */}
            <Box style={{ backgroundColor: "#F4F6F8", minHeight: "100%", py: 3 }}>
                <Container style={{ display:"flex", flexDirection:"column"}}>
                    <Box style={{ marginTop: 16, width:"100%"}}>
                        <UserToolbar total={users.length} />
                    </Box>
                </Container>
                <Container>
                    <Box style={{ marginTop: 8 }}>{ShowList()}</Box>
                </Container>
            </Box>

            {/* route this part -------------------- */}
        </AdminLayout>
    );
};

const UserToolbar = ({ total }) => {
    return (
        <Card>
            <CardContent style={{ display: "flex", maxWidth: "100%" }}>
                <Typography style={{ paddingTop: "5px" }}>Total: {total ? total : 0} user(s)</Typography>
                <Box style={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
                    <Button variant="contained">Send Email</Button>
                </Box>
            </CardContent>
        </Card>
    );
};

const UsersList = ({ users }) => {

    return (
        <Card>
            <Box style={{ minWidth: 1050}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Assigned Mentor</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((e) => (
                            <UserDetails value={e}/>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Card>
    );
};

export default AdminDash;
