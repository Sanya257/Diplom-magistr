import React from 'react';
import './Users.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.allUsers();
    }

    allUsers = () => {
        fetch('/users', {
            headers: {
                "Content-type": "application/json"
            },
            method: 'get',
        }).then(res => {
            return res.json();
        }).then(e => {
            this.setState({users: e});
        });

    };

    render() {
        let b = [];
        for (let i = 0; i < this.state.users.length; i++) {
            b.push(this.state.users[i]['fullname'])
        }
        let c = [];
        for (let i = 0; i < this.state.users.length; i++) {
            c.push(this.state.users[i]['phone'])
        }
        let d = [];
        for (let i = 0; i < this.state.users.length; i++) {
            d.push(this.state.users[i]['email'])
        }

        let fullName;
        fullName = b.map((item, index) => {
            return (
                <div key={index} className='fullname'>{item}</div>
            )
        });
        let phone;
        phone = c.map((item, index) => {
            return (
                <div key={index} className='phone'>{item}</div>
            )
        });
        let email;
        email = d.map((item, index) => {
            return (
                <div key={index} className='email'>{item}</div>
            )
        });

        return (
            <section className='home-section'>
                <header className='headerUser'>
                    <h3>Name</h3>
                    <h3>Phone</h3>
                    <h3>Email</h3>
                    <h3>Status</h3>
                    <h3>Position</h3>
                </header>
                <div className='table1'>
                    <div>{fullName}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                    <div>
                        <div className='online'>Online</div>
                        <div className='offline'>Offline</div>
                    </div>
                    <div>
                        <div className='position'>SEO</div>
                        <div className='position'>Programmer</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Users;