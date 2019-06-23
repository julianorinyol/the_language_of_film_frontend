import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

let SimpleCard = (props) => {
  const [open, setOpen] = React.useState(false);
  let [prevItem, setPrevItem] = React.useState(null);
  const { item } = props
  
  if ( item !== prevItem) {
    setPrevItem(item);
    setOpen(false)
  }

  const classes = useStyles();
  function onKeyDown(e) {
    if(e.key === 'Enter') {
      setOpen(true)
    }
  }

  return (
    <Card tabIndex="0" onKeyDown={onKeyDown} className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.item.question}
        </Typography>

        { open ? 
          props.item.answer
          : (
            <CardActions>
              <Button onClick={(e)=> setOpen(true)} color="primary" size="small">Show Answer</Button>
            </CardActions>
          )
        }
      </CardContent>
    </Card>
  );
}

const itemShape = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

SimpleCard.propTypes = {
  item: PropTypes.shape(itemShape).isRequired
}
export default SimpleCard