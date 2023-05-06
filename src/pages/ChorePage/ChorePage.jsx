import Header from "../../components/Header/Header";
import AddChoreForm from "../../components/chores/AddChoreForm";
import ChoreDisplay from "../../components/chores/ChoreDisplay";
import Loader from "../../components/Loader/Loader";

import { useState, useEffect } from "react";
import { Grid } from "semantic-ui-css";

// Import API utilities for chores and users from choresService

import * as choresService from "../../utils/choresService";
import tokenService from "../../utils/tokenService";

export default function ChorePage({ loggedUser, handleLogout }) {
    const [chores, setChores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

// Add your functions to handle chores (CRUD operations) here

async function handleAddChore(chore) {
    try {
        setLoading(true);
        const responseData = await choresService.createChore(chore);
        console.log(responseData, "response from the server");
        setChores([responseData.data, ...chores]);
        setLoading(false);
    } catch (err) {
        setLoading(false);
        console.log(err, "error in handleAddChore");
        setError("Error creating a chore, please try again");
    }
}

useEffect(() => {
    getChores();
}, []);

if (error) {
    return (
        <>
        <Header loggedUser={loggedUser} handleLogout={handleLogout} />
        </>

    );
}
return (
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <Header loggedUser={ loggedUser } handleLogout={handleLogout} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <AddChoreForm handleAddChore={handleAddChore} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <ChoreDisplay
                    chores={chores}
                    loading={loading}
                    completeChore={completeChore}
                    loggedUser={loggedUser}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);
}