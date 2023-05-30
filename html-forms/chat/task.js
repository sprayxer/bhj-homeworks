const chatWidget = document.querySelector('.chat-widget')

function showChatWidget() {
  chatWidget.classList.add('chat-widget_active')
}
chatWidget.addEventListener('click', showChatWidget)


const chatWidgetInput = document.getElementById('chat-widget__input')
const chatWidgetMessages = document.querySelector('.chat-widget__messages')

const messagesRobot = [
  'привет пока',
  'учись, учись',
  'рано еще спать'
]

chatWidgetInput.addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    const text = event.target.value
    if (text === '') {
      return
    }

    chatWidgetMessages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">09:21</div>
          <div class="message__text">
          </div>
        </div>
        <div class="message">
          <div class="message__time">09:21</div>
          <div class="message__text">
          </div>
        </div>
      `;

    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' : '' + date.getMinutes()

    const message = [...document.getElementsByClassName('message')]
    const random = Math.floor(Math.random() * messagesRobot.length)
    const messageRobot = messagesRobot[random]

    message[message.length - 2].querySelector('.message__text').textContent = text
    message[message.length - 2].querySelector('.message__time').textContent = hour + ':' + minutes

    message[message.length - 1].querySelector('.message__text').textContent = messageRobot
    message[message.length - 1].querySelector('.message__time').textContent = hour + ':' + minutes

    event.target.value = ''
    chatWidgetMessages.scrollIntoView(false)
  }
});


