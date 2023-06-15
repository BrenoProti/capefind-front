import styles from "./styles.module.scss";
import Logo from "../../assets/logo.svg";
import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

type HeaderProps = {
  searchString: string;
};

const Header = ({ searchString }: HeaderProps) => {

  const [error, setError] = useState<string>('');
  const [search, setSearch] = useState<string>(searchString);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) {
      setError('Digite um termo para pesquisar');
      return;
    }

    navigate(`/results?search=${search}`);
    setError('');
  }

  const goToHome = () => {
    navigate('/');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} onClick={() => goToHome()}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={styles.searchInput}>
        <TextField
          id="search-input"
          fullWidth
          color="primary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ transform: "rotate(90deg)" }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="none"
          error={!!error}
          helperText={error}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Header;
