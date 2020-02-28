import React, { useState, useRef } from "react";
import { Button, IconButton, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import classes from "./Header.module.css";

const Header = () => {
  const [searchVisible, setSearchVisibleHandler] = useState(false);
  const mdInputRef = useRef(null);

  const changeSearchState = () => {
    if (!searchVisible) {
      mdInputRef.current.focus();
      mdInputRef.current.value = "";
    }
    setSearchVisibleHandler(!searchVisible);
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
            disableRipple={true}
            disableFocusRipple={true}
            size="small"
          >
            <Search className={classes.IconClass} />
          </IconButton>
          <Input
            inputRef={mdInputRef}
            onBlur={changeSearchState}
            placeholder="Search Blog"
            disableUnderline={true}
            className={searchVisible ? classes.openSearch : classes.closeSearch}
          />
        </div>
      </section>
      <div style={{ marginRight: "1rem" }}>
        <Button
          disableRipple={true}
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
