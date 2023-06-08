import "./styles.scss";
import Logo from "../../assets/logo_big.svg";
import WaveTop from "../../assets/wave-top.svg";
import WaveBottom from "../../assets/wave-bottom.svg";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="wave-top">
        <img src={WaveTop} alt="Wave Top" />
      </div>
      <div className="container">
        <img src={Logo} alt="Logo" />
        <div className="slogan">
          Indexando, organizando e entregando informações para você !
          <SearchIcon className="searchIcon" />
        </div>

        <TextField
          id="search-input"
          fullWidth
          color="primary"
          label="Digite a palavra chave que deseja buscar, nos cuidaremos do resto !"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ transform: 'rotate(90deg)'}}/>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="none"
        />

        <div className="call">
          <p>
            A ferramenta perfeita para os estudantes que buscam o conhecimento !
          </p>
        </div>
      </div>
      <div className="wave-bottom">
        <img src={WaveBottom} alt="Wave Bottom" />
      </div>
    </div>
  );
};

export default Home;
