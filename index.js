const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case 'getAllContacts':
			const allContacts = await contacts.getAllContacts();
			console.log('qweqwe', allContacts);
			break;
		case 'getContactById':
			const contactById = await contacts.getContactById(id);
			console.log('byId', contactById);
			break;
		case 'addContact':
			const addedContact = await contacts.addContact(name, email, phone);
			console.log('addContact', addedContact);
			break;
		case 'removeContact':
			const removedContact = await contacts.removeContact(id);
			console.log('removeContact', removedContact);
			break;

		default:
			console.log('Unknown action');
			break;
	}
};

invokeAction({
	action: 'removeContact',
	id:'3b66f2f0-dfeb-4ab0-ae19-ddd8f44058b9'
});
invokeAction({ action: 'getAllContacts' });
