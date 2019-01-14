<template>
	<div class="chatContain">
		<beautiful-chat
			:participants="participants"
			:titleImageUrl="titleImageUrl"
			:onMessageWasSent="onMessageWasSent"
			:messageList="cover"
			:newMessagesCount="newMessagesCount"
			:isOpen="isChatOpen"
			:close="closeChat"
			:open="openChat"
			:showEmoji="true"
			:showFile="true"
			:showTypingIndicator="showTypingIndicator"
			:colors="colors"
			:alwaysScrollToBottom="alwaysScrollToBottom"
			:messageStyling="messageStyling" />
			<div class="footBar" @click="a()">嘤嘤嘤</div>
	</div>
</template>

<script>
import Vue from 'vue';
// import $http from '@/api/api.js';
import Chat from 'vue-beautiful-chat';
// import bus from '@/assets/utils/bus.js';
Vue.use(Chat);

export default {
  name: 'customer',
	props:{
		cover: {
			type: Array
		}
	},
  data () {
    return {
      	participants: [
      	{
      		id: 'user1',
      		name: 'Matteo',
      		imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
      	},
      	{
      		id: 'user2',
      		name: 'Support',
      		imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
      	}
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
      		{ type: 'text', author: `me`, data: { text: `Say yes!` } },
      		{ type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
      	header: {
      		bg: '#4e8cff',
      		text: '#ffffff'
      	},
      	launcher: {
      		bg: '#4e8cff'
      	},
      	messageList: {
      		bg: '#ffffff'
      	},
      	sentMessage: {
      		bg: '#4e8cff',
      		text: '#ffffff'
      	},
      	receivedMessage: {
      		bg: '#eaeaea',
      		text: '#222222'
      	},
      	userInput: {
      		bg: '#f4f7f9',
      		text: '#565867'
      	}
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false ,
      messageStyling: true 
    };
  },
  methods: {
		a(){
			alert('111');
		},
    sendMessage (text) {
    	if (text.length > 0) {
    		this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
    		this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
    	}
    },
    onMessageWasSent (message) {
    	// called when the user sends a message
    	this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
    	// called when the user clicks on the fab button to open the chat
    	this.isChatOpen = true
    	this.newMessagesCount = 0
    },
    closeChat () {
    	// called when the user clicks on the botton to close the chat
    	this.isChatOpen = false
    }
  },
  mounted () {
    
  },
  created () {
  
  }
};
</script>
<style scoped>
	/deep/ .sc-message--text{
		height: 50px;
	}
	.footBar{
		height: 30px;
		width: 369px;
		position: absolute;
		bottom: 0;
		background: gray;
		margin-left: -24px;
	}
	.chatContain{
		position: relative;
		height: 325px;
		width: 370px;
		display: inline-block;
	}
  /deep/ .sc-chat-window{
		margin-top: 120px;
		margin-right: 10px;
		position: relative !important;
	}
	/deep/ .sc-header--close-button{
		display: none;
	}
</style>
