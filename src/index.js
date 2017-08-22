import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

var CONTACTS = [
	{
		id: 1,
		name: 'Darth Vader',
		phoneNumber: '+250966666666',
		image: 'http://img.freepik.com/free-icon/home-icon-silhouette_318-85097.jpg?size=338c&ext=jpg'
	}, {
		id: 2,
		name: 'Princess Leia',
		phoneNumber: '+250966344466',
		image: 'http://silhouettesfree.com/human/family/home-silhouette-image.png'
	}, {
		id: 3,
		name: 'Luke Skywalker',
		phoneNumber: '+250976654433',
		image: 'http://static.wixstatic.com/media/5e5b5e_7d8323baf24743f397d42e41cecf1aca~mv2.png'
	}, {
		id: 4,
		name: 'Chewbacca',
		phoneNumber: '+250456784935',
		image: 'http://img.freepik.com/free-icon/home-interface-symbol-with-a-window-of-squares_318-60365.jpg?size=338&ext=jpg'
	}
];


class Contact extends Component {
	render() {
		return (
			<li className="contact">
				<img className="contact-image" src={this.props.image} width="60px" height="60px" />
				<div className="contact-info">
					<div className="contact-name"> {this.props.name} </div>
					<div className="contact-number"> {this.props.phoneNumber} </div>
				</div>
			</li>
		);
	}
}

class ContactsList extends Component {
	constructor(props) {
        super(props);
		
		this.state = {displayedContacts: CONTACTS};
	}
	
	handleSearch(event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function(el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({displayedContacts: displayedContacts})
	}
	
	render() {
		return (
			<div className="contacts">
				<input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch.bind(this)} />
				<ul className="contacts-list">
					{
					   this.state.displayedContacts.map(function(el) {
							return <Contact
								key={el.id}
								name={el.name}
								phoneNumber={el.phoneNumber}
								image={el.image}
							/>;
					   })
					}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<ContactsList />, document.getElementById('root'));

registerServiceWorker();
