import React from 'react';
import {TextField, InputAdornment} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';

const SearchBox = ({searchQuery, setSearchQuery}) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form action="/" method="get" onSubmit={onSubmit}>
                <TextField 
                    margin="normal"
                    size="medium"
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    name="s"
                    id="search" 
                    placeholder="Buscar por nombre..." 
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search/>
                            </InputAdornment>
                        ),
                    }}
                    style={{width: '500px'}}
                />
            </form>

    )
}

export default SearchBox;