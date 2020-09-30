import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.default_data = [
            {id: 1, title: 'Разминка'},
            {id: 2, title: 'Воробьиные'},
            {id: 3, title: 'Лесные птицы'},
            {id: 4, title: 'Певчие птицы'},
            {id: 5, title: 'Хищные птицы'},
            {id: 6, title: 'Морские птицы'},
        ];
    }

    render() {
        const {select} = this.props;

        return (
            <div className="nav-bar">
                {
                    this.default_data.map(item => {
                        if (item.id === select) {
                            return <div key={item.id}><p className='select-question'>{item.title}</p></div>
                        } else {
                            return <div key={item.id}><p>{item.title}</p></div>
                        }
                    })
                }
            </div>
        )
    }

};

export default NavBar
