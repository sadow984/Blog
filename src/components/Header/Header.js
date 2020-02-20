import React, { useState, useRef } from 'react';
import { Button, IconButton, Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import classes from './Header.module.css';

const Header = () => {
  const [searchVisible, setSearchVisibleHandler] = useState(false);
  const inputRef = useRef(null);

  const changeSearchState = () => {
    setSearchVisibleHandler(!searchVisible);
    inputRef.current.value = '';
  };

  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <div className={classes.LogoDiv}>
          <span>BG</span>
        </div>
      </div>
      <section className={classes.section}>
        <div className={classes.Bar}>
          <IconButton
            title="Search Blog"
            onClick={changeSearchState}
            disableRipple="true"
            disableFocusRipple="true"
            size="small"
            onBlur={changeSearchState}
          >
            <Search className={classes.IconClass} />
          </IconButton>
          <div className={classes.SearchBox}
            style={{ display: `${searchVisible ? "inline-block" : "none"}` }}
          >
            <Input
              ref={inputRef}
              autoFocus={true}
              disableUnderline={true}
              placeholder="Search Blog"
            />
          </div>
        </div>
      </section>
      <div style={{ marginRight: "1rem" }}>
        <Button
          disableRipple="true"
          variant="contained"
          color="primary"
          size="medium"
        >
          LOGIN
        </Button>
      </div>
    </header>
  );
};

export default Header;
