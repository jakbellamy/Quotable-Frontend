import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export const styles = {
    container: {
       flex: .6
    },
    playerLine:{
        borderBottom: 'solid 1px #e5e5e5',
        marginTop: '2%',
        marginBottom: '2%',
    },
    displayName:{
        fontFamily: 'Marcellus SC',
        marginLeft: '4%'
    },
    input: {
        width: 'fullWidth',
        height:'auto',
        variant: 'outlined'
    }
}

export const classes = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      Margin: 10,
      width: 100,
      height: 100,
    }
  });
  