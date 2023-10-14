const TaskCard = (props) =>{

    const {id, icon, title, handleClick} = props;
    console.log(icon )
    return <div className="tasks--card" onClick={() => handleClick(id)}>
    <img src={icon} className="icon-small" alt="icon"/>
    <p>{title}</p>
</div>
} 

export default TaskCard;