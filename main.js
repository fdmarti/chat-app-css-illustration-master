import 'boxicons'
import './style.css'

const chatContent = document.querySelectorAll('.chat-content')

chatContent.forEach((el, i) => {
    el.style.animationDelay = i + 's'
})