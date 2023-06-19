import styles from "./styles.module.scss";
import Logo from "../../assets/logo_big.svg";
import WaveTop from "../../assets/wave-top.svg";
import WaveBottom from "../../assets/wave-bottom.svg";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) {
      setError('Digite um termo para pesquisar');
      return;
    }

    navigate(`/results?search=${search}`);
    setError('');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.waveTop}>
        <img src={WaveTop} alt="Wave Top" />
      </div>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" />
        <div className={styles.slogan}>
          Indexando, organizando e entregando informações para você !
          <SearchIcon className={styles.searchIcon} />
        </div>

        <TextField
          id="search-input"
          fullWidth
          color="primary"
          label={isSmallScreen ? "Palavra chave" : "Digite a palavra chave que deseja buscar, nos cuidaremos do resto!"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ transform: 'rotate(90deg)'}}/>
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
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />

        <div className={styles.call}>
          <p>
            A ferramenta perfeita para os estudantes que buscam o conhecimento !
          </p>
        </div>
      </div>
      <div className={styles.waveBottom}>
        <img src={WaveBottom} alt="Wave Bottom" />
      </div>
    </div>
  );
};

export default Home;
