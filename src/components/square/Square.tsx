import './square.css'

interface Props {
	row: number
	col: number
}

export const Square = ({ row, col }: Props): JSX.Element => {
	return (
		<input className='square' type='text' placeholder={`${row}, ${col}`} />
	)
}
