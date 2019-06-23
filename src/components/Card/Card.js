import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    // maxWidth: 700,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    padding: '50px 50px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // minHeight: 300
  },
  topBox: {
    borderBottom: '1px solid grey'
  },
  bottomBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomLeft: {
    marginRight: '10px'
  },
  exampleText: {
    fontSize: '10px',
    marginTop: '5px'
  }
});

let SimpleCard = (props) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [showExamples, setShowExamples] = React.useState(false);
  let [prevItem, setPrevItem] = React.useState(null);
  const { item } = props
  
  if ( item !== prevItem) {
    setPrevItem(item);
    setShowAnswer(false)
    setShowExamples(false)
  }

  const classes = useStyles();
  function onKeyDown(e) {
    if(e.key === 'Enter') {
      setShowAnswer(true)
      setShowExamples(true)
    }
  }
  
  const showBoth =() => {
    setShowAnswer(true)
    setShowExamples(true)
  }

  return (
      <Card tabIndex="0" onKeyDown={onKeyDown} className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Box className={classes.topBox}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.item.question}
            </Typography>
          </Box>
          <Box className={classes.bottomBox}>
            <Box className={classes.bottomLeft}>
              { showAnswer ? 
                (<Typography color="textPrimary" gutterBottom>
                  {props.item.answer}
                </Typography>)
                : (
                  <CardActions>
                    <Button onClick={(e)=> showBoth()} color="primary" size="small">Show Answer</Button>
                  </CardActions>
                )
              }
            </Box>
          

            <Box>
              { showExamples ? props.item.examples.map((example, i) => {
                  return <Typography className={classes.exampleText} key={i}>* {example}</Typography>
                }) : ( ''
                  // <CardActions>
                  //   <Button onClick={(e)=> setShowExamples(true)} color="primary" size="small">Show Examples</Button>
                  // </CardActions>
                )
              }
            </Box>
          </Box>
        </CardContent>
      </Card>
  );
}

/*

*/
const itemShape = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

SimpleCard.propTypes = {
  item: PropTypes.shape(itemShape).isRequired
}
export default SimpleCard