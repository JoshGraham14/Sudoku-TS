import { Board } from './components/board/Board'

const App = () => {
	return (
		<div className='App'>
			<header>
				<h1>Sudoku Solver</h1>
			</header>
			<form className='container'>
				<Board />
				<button>Solve</button>
			</form>
		</div>
	)
}

export default App
