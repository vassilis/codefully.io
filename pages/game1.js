import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import portraits from '../data/portraits';
import getShuffledArr from '../helpers/shuffleArray';

const styles = () => ({
  root: {},
  heroTitle: {
    textAlign: 'center',
  },
  deck: {
    maxWidth: 750,
    margin: '50px auto',
    display: 'flex',
    flexFlow: 'wrap',
  },
  card: {
    cursor: 'pointer',
    width: 140,
    height: 140,
    margin: 5,
    position: 'relative',
    zIndex: 1,
    outline: 0,
  },
  hidden: {
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#333',
      zIndex: 10,
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.cardsNumber = 10;
    this.state = {
      cards: [],
      sid: '',
      suid: '',
      canPlay: true,
    };
  }

  componentDidMount() {
    const cards = [];
    const images = portraits;
    for (let x = 0; x < this.cardsNumber; x += 1) {
      const id = `card-${x}`;
      cards.push({
        id,
        uid: `${id}-1`,
        img: images[x],
        isHidden: true,
      });
      cards.push({
        id,
        uid: `${id}-2`,
        img: images[x],
        isHidden: true,
      });
    }
    this.setState({
      cards: getShuffledArr(cards),
    });
  }

  handleClick = (id, uid) => {
    const {
      cards, sid, suid, canPlay,
    } = this.state;
    if (!canPlay) return;
    const uCards = [...cards];
    const card = uCards.find(c => c.uid === uid);
    if (!card.isHidden) return;
    card.isHidden = false;
    this.setState({
      sid: id,
      suid: uid,
      cards: uCards,
    });
    if (id === sid) {
      this.setState({
        sid: '',
        suid: '',
      });
    }
    if (sid !== '' && id !== sid) {
      this.setState({
        canPlay: false,
      });
      setTimeout(() => {
        card.isHidden = true;
        const prevCard = uCards.find(c => c.uid === suid);
        prevCard.isHidden = true;
        this.setState({
          sid: '',
          suid: '',
          cards: uCards,
          canPlay: true,
        });
      }, 1000);
    }
  };

  render() {
    const { classes } = this.props;
    const { cards } = this.state;

    const renderCards = cards.map((card, index) => (
      <div
        key={card.uid}
        role="button"
        className={classnames(classes.card, card.isHidden && classes.hidden)}
        onClick={() => this.handleClick(card.id, card.uid)}
        onKeyPress={this.handleClick}
        tabIndex={index}
      >
        <img src={card.img} alt="" className={classes.img} />
      </div>
    ));

    return (
      <React.Fragment>
        <h1 className={classnames('hero', classes.heroTitle)}>Game</h1>
        <div className={classes.deck}>{renderCards}</div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Index);
