import { menuRouter } from '../router/menu.router';
import { AbstractAction } from './abstract.action';

export class MenuAction extends AbstractAction {
	public async handle() {
		await menuRouter();
	}
}
