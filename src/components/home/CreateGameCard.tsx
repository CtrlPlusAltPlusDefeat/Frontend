import ActionButton from '../common/ActionButton/ActionButton';
import CardTitle from './CardTitle';

import { useSetNameModal } from '../common/Modal/Modals/SetName';
import { useCreateLobby } from '../../stores/lobby/lobbyActions';

const CreateGameCard = () => {
	const create = useCreateLobby();
	const open = useSetNameModal();

	return (
		<div className={'border rounded border-black p-4'}>
			<div className={'flex items-center flex-col '}>
				<CardTitle title={'Create A Game'} />
				<ActionButton
					classes={['mt-4']}
					text={'Create'}
					onClick={() => {
						open(create);
					}}
				/>
			</div>
		</div>
	);
};

export default CreateGameCard;
