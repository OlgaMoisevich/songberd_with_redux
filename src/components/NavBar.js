import React, {useState} from 'react';
import {useSelector} from "react-redux";


const NavBar = () => {
    const select = useSelector(state => state.header.selection_tab_menu);

    const default_data = [
        {id: 0, title: 'Разминка'},
        {id: 1, title: 'Воробьиные'},
        {id: 2, title: 'Лесные птицы'},
        {id: 3, title: 'Певчие птицы'},
        {id: 4, title: 'Хищные птицы'},
        {id: 5, title: 'Морские птицы'},
    ];
    const [nav_bar_dafault_data] = useState(default_data);

    return (
        <div className="nav-bar">
            {
                nav_bar_dafault_data.map(item => {
                    if (item.id === select) {
                        return <div key={item.id}><p className='select-question'>{item.title}</p></div>
                    } else {
                        return <div key={item.id}><p>{item.title}</p></div>
                    }
                })
            }
        </div>
    )
};

export default NavBar
