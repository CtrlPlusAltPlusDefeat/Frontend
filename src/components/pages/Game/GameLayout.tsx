import React from 'react';

import { useGameStore } from '../../../stores/game/gameStore';
import { useGetPlayerTeam } from '../../../hooks/playerHooks';
import { usePlayerAction } from '../../../stores/game/gameActions';
import { getTeamTextColour } from '../../../common/wordguess';
import ActionButton from '../../common/ActionButton/ActionButton';
import { Team } from '../../../common/interfaces';
import CardGrid from './components/CardGrid';
import TeamCard from './components/TeamCard';

interface PanelProps {
	team: Team;
}

export const LeftPanel = ({ team }: PanelProps) => {
	return (
		<div className={'w-1/5'}>
			<TeamCard {...team} />
		</div>
	);
};

export const MiddlePanel = () => {
	const currentTeam = useGameStore((s) => s.state?.currentTurn);
	const xLength = useGameStore((s) => s.game?.xLength) ?? 0;
	const yLength = useGameStore((s) => s.game?.yLength) ?? 0;
	const cards = useGameStore((s) => s.game?.cards) ?? [];
	const playerTeam = useGetPlayerTeam();
	const playerAction = usePlayerAction();

	return (
		<div className="w-full">
			<p className={currentTeam ? getTeamTextColour(currentTeam) : ''}>current team: {currentTeam}</p>
			{(playerTeam?.name === currentTeam || currentTeam === '') && <ActionButton state={'danger'} text={'Player Action'} onClick={playerAction} />}
			<CardGrid cards={cards} xLength={xLength} yLength={yLength} />
		</div>
	);
};

export const RightPanel = ({ team }: PanelProps) => {
	return (
		<div className={'w-1/5'}>
			{/* eslint-disable-next-line react/jsx-no-undef */}
			<TeamCard {...team} />
		</div>
	);
};
