const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

let snake = [
    {x: 200, y: 200},
    {x: 220, y: 200},
    {x: 240, y: 200},
    {x: 260, y: 200}
]

const drawSnakeCell = (snakeCell) => {
    ctx.fillStyle = "lightgreen"
    ctx.fillRect(snakeCell.x, snakeCell.y, 20, 20)
}

const renderSnake = () => {
    snake.forEach(drawSnakeCell)
}

renderSnake()

const moveSnake = () => {
    snake[0].x -= 20
    snake[1].x -= 20
    snake[2].x -= 20
    snake[3].x -= 20
    
    renderSnake()
}

canvas.addEventListener("click", moveSnake)