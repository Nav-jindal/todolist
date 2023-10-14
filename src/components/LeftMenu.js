import ListCard from "./ListCard";
import Tags from "./Tags";
import TaskCard from "./TaskCard";

const LeftMenu = (props) => 
{

    const tasktype = [{
        id:0,
        icon: 'images/right.svg',
        title: 'Upcoming'
    },
    {
        id:1,
        icon: 'images/today.svg',
        title: 'Today'
    },
    {
        id:2,
        icon: 'images/calendar.svg',
        title: 'Calendar'
    },
    {
        id:3,
        icon: 'images/sticky_note.svg',
        title: 'Sticky Wall'
    }
    ];

    const togglemenu = () => {
        let leftmenu = document.querySelector('.leftmenu')
        leftmenu.classList.toggle('active');
    }

    return <div className="leftmenu">
    <div className="leftmenu-topbar">
        <div className="leftmenu--heading">
            <h3>Menu</h3>
            <button onClick={togglemenu}><img className="icon" src="images/menu.svg"/></button>
        </div>
        <div className="search">
                <input type="text" />
                <button></button>
        </div>
    </div>
    
   <section className="tasks">
    <h4>Tasks</h4>
    {tasktype.map((task) => <TaskCard   key={task.id}
                                        handleClick={props.handleClick}
                                        {...task} /> )}
    </section>
    <section className="lists">
    <h4>Lists</h4>
    <ListCard/>
    </section>
    <section className="tags">
    <h4>Tags</h4>
    <Tags/>
    </section>
</div> 
}

export default LeftMenu;