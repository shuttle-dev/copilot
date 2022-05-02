import {
	adjectives,
	animals,
	Config,
	uniqueNamesGenerator,
} from 'unique-names-generator';

const deviceNameConfig: Config = {
	dictionaries: [adjectives, animals],
	separator: ' ',
	style: 'capital',
	length: 2,
};

const generateRandomName = () => uniqueNamesGenerator(deviceNameConfig);

export default generateRandomName;
