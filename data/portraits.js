import img01 from "../images/portraits/1222271.jpg";
import img02 from "../images/portraits/485982.jpg";
import img03 from "../images/portraits/733500.jpg";
import img04 from "../images/portraits/1181695.jpg";
import img05 from "../images/portraits/1250426.jpg";
import img06 from "../images/portraits/937481.jpg";
import img07 from "../images/portraits/220453.jpg";
import img08 from "../images/portraits/1455398.jpg";
import img09 from "../images/portraits/1820257.jpg";
import img10 from "../images/portraits/936229.jpg";
import img11 from "../images/portraits/834509.jpg";
import img12 from "../images/portraits/1121796.jpg";
import img13 from "../images/portraits/774909.jpg";
import img14 from "../images/portraits/769690.jpg";
import getShuffledArr from "../helpers/shuffleArray";

const portraits = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14
];

const suffledPortraits = getShuffledArr(portraits);

export default suffledPortraits;
