'use strict';

var vue = new Vue({
	el: '#vue',
	data: {
		navSeT: false,
		navSeF: true,
		navSt: 'navStF'
	},
	methods: {
		navF() {
			this.navSeF = !this.navSeF
			this.navSeT = !this.navSeT
		},

		goToZm() {
			location.href = 'https://bananchik204.github.io/';
		},
		goToVkBuy() {
			location.href = 'https://vk.com/sfomchukov';
		},
		goToVkSay() {
			location.href = 'https://vk.com/sfomchukov';
		},
		goToDiscord() {
			location.href = 'https://discord.gg/nPUK4Bw';
		}
	}
})