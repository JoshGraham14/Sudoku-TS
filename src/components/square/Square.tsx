interface Props {
	row: number
	col: number
}

export const Square = ({ row, col }: Props): JSX.Element => {
	return <input type='text' placeholder={`${row}, ${col}`} />
}
