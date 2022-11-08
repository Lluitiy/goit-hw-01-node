const { program } = require('commander');

const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case 'getAllContacts':
			const allContacts = await contacts.getAllContacts();
			console.log('allContacts:', allContacts);
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

program
	.option('-a, --action <type>', 'choose action')
	.option('-i, --id <type>', 'user id')
	.option('-n, --name <type>', 'user name')
	.option('-e, --email <type>', 'user email')
	.option('-p, --phone <type>', 'user phone');
program.parse(process.argv);

const option = program.opts();
invokeAction(option);
