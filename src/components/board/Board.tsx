import { Square } from '../square/Square'
import './board.css'

export const Board = (): JSX.Element => {
	let squares: JSX.Element[] = []
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			squares.push(<Square row={i} col={j} key={`${i}${j}`} />)
		}
	}
	return (
		<div className='board'>
			{squares.map(square => {
				return square
			})}
		</div>
	)
}
