import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
function MeetupItem(props){
return <li>
    <Card>
<div className={classes.item}> 
        <img src={props.image} alt={props.title}/>
</div>
<div className={classes.content}>
    <h3>{props.title}</h3>
    <address>{props.address}</address>
    <p>{props.description}</p>
</div>
<div className={classes.actions}>
    <button>To Favorites</button>
</div>
</Card>
</li>
}
export default MeetupItem;