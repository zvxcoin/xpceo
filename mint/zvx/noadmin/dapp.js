const VOTE_ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "date",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "code",
				type: "string",
			},
			{
				indexed: false,
				internalType: "address",
				name: "childAddress",
				type: "address",
			},
		],
		name: "ChildCreated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name_",
				type: "string",
			},
			{
				internalType: "string",
				name: "symbol_",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "totalSupply_",
				type: "uint256",
			},
			{
				internalType: "uint256[4]",
				name: "buyFeeSetting_",
				type: "uint256[4]",
			},
			{
				internalType: "uint256[4]",
				name: "sellFeeSetting_",
				type: "uint256[4]",
			},
			{
				internalType: "address[6]",
				name: "addrs_",
				type: "address[6]",
			},
			{
				internalType: "uint256[9]",
				name: "amounts_",
				type: "uint256[9]",
			},
		],
		name: "createChild",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "get",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "getAirDropAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAirDropListLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTokenList",
		outputs: [
			{
				internalType: "contract RedKing[]",
				name: "",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "getTokenSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "remove",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "serviceFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "serviceReceiver",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
			{
				internalType: "address",
				name: "_i",
				type: "address",
			},
		],
		name: "set",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "adl",
				type: "address[]",
			},
		],
		name: "setAirDropList",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setServiceFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "val",
				type: "address",
			},
		],
		name: "setServiceReceiver",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "tokenList",
		outputs: [
			{
				internalType: "contract RedKing",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "tokenOwners",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const VOTE_ADDR = "0xcb624064B1f904639e1ea32778D1A467AD18Ed3A";
// $(function () {
// 	init();
// 	//输入框如果是class就是 ".class名字" ID “#id名字”
// 	$("#qianbaodizhi").blur(function () {
// 		VOTE_ADDR = $(this).val();
// 		console.log("@", VOTE_ADDR);
// 	});
// });

$(function () {
	init();
});
//   合约地址

function getWeb3Provider() {
	if (!window.web3Provider) {
		if (!window.ethereum) {
			console.error("there is no web3 provider.");
			return null;
		}
		window.web3Provider = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);
	}
	return window.web3Provider;
}

function showAlert(title, message) {
	let m = $("#alertModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showInfo(title, message) {
	let m = $("#infoModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showLoading(title, message) {
	let m = $("#loadingModal");
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	let obj = {
		setTitle: t => {
			m.find(".x-title").text(t);
		},
		setMessage: t => {
			m.find(".x-message").text(t);
		},
		close: () => {
			setTimeout(function () {
				myModal.hide();
			}, 500);
		},
	};
	obj.setTitle(title);
	obj.setMessage(message);
	myModal.show();
	return obj;
}

function translateError(err) {
	window.err = err;
	if (typeof err === "string") {
		return err;
	}
	if (err.error && err.error.code && err.error.message) {
		return `Error (${err.error.code}): ${err.error.message}`;
	}
	if (err.code && err.message) {
		return `Error (${err.code}): ${err.message}`;
	}
	return err.message || err.toString();
}

function init() {
	console.log("init vue...");
	window.vm = new Vue({
		el: "#vm",
		data: {
			account: null,
			chainId: 0,
			proposal: 0,
			name: "", //绑定的输入框值（定义漏了）  记得加
			symbol: "",
			totalSupply: "",
			buyFeeSetting1: "0",
			buyFeeSetting2: "0",
			buyFeeSetting3: "0",
			buyFeeSetting4: "0",
			sellFeeSetting1: "0",
			sellFeeSetting2: "0",
			sellFeeSetting3: "0",
			sellFeeSetting4: "0",
			addrs1: "0x0000000000000000000000000000000000000000",
			addrs2: "",
			addrs3: "0xf1c45734B6642D84021FF70f21a7361c4625a6AF",
			addrs4: "",
			addrs5: "0x000000000000000000000000000000000000dEaD",
			addrs6: "0xB6BA90af76D139AB3170c7df0139636dB6120F7e",
			amounts1: "0",
			amounts2: "0",
			amounts3: "0",
			amounts4: "0",
			amounts5: "200000",
			amounts6: "0",
			amounts7: "0",
			amounts8: "0",
			amounts9: "0",
		},
		computed: {
			ready: function () {
				return this.account && this.chainId === 97;
			},
			wrongNetwork: function () {
				return this.account && this.chainId !== 97;
			},
		},
		methods: {
			shuzu() {
				let buyFeeSetting = [
					this.buyFeeSetting1,
					this.buyFeeSetting2,
					this.buyFeeSetting3,
					this.buyFeeSetting4,
				];
				let sellFeeSetting = [
					this.sellFeeSetting1,
					this.sellFeeSetting2,
					this.sellFeeSetting3,
					this.sellFeeSetting4,
				];

				let addrs = [
					this.addrs1,
					this.addrs2,
					this.addrs3,
					this.addrs4,
					this.addrs5,
					this.addrs6,
				];
				let amounts = [
					this.amounts1,
					this.amounts2,
					this.amounts3,
					this.amounts4,
					this.amounts5,
					this.amounts6,
					this.amounts7,
					this.amounts8,
					this.amounts9,
				];
			},

			gotoScanUrl: function () {
				window.open("https://ropsten.etherscan.io/address/" + this.account);
			},
			// 买入流动性占比调用
			createChild: async function () {
				let loading = showLoading("准备", "等待中...");
				try {
					if (!this.ready) {
						throw "请先连接钱包!";
					}
					loading.setMessage("请在钱包确认交易");
					// TODO: 检查MetaMask连接信息
					// 根据地址和ABI创建一个Contract对象:
					let contract = new ethers.Contract(
						VOTE_ADDR,
						VOTE_ABI,
						window.getWeb3Provider().getSigner()
					);
					// 调用vote()函数，并返回一个tx对象:
					// 也需要修改 let tx = await contract.方法名称(this.huangbin 按钮);

					let buyFeeSetting = [
						this.buyFeeSetting1,
						this.buyFeeSetting2,
						this.buyFeeSetting3,
						this.buyFeeSetting4,
					];
					let sellFeeSetting = [
						this.sellFeeSetting1,
						this.sellFeeSetting2,
						this.sellFeeSetting3,
						this.sellFeeSetting4,
					];

					let addrs = [
						this.addrs1,
						this.addrs2,
						this.addrs3,
						this.addrs4,
						this.addrs5,
						this.addrs6,
					];
					let amounts = [
						this.amounts1,
						this.amounts2,
						this.amounts3,
						this.amounts4,
						this.amounts5,
						this.amounts6,
						this.amounts7,
						this.amounts8,
						this.amounts9,
					];

					let tx = await contract.createChild(
						this.name,
						this.symbol,
						this.totalSupply,
						buyFeeSetting,
						sellFeeSetting,
						addrs,
						amounts,
						{ value: ethers.utils.parseEther("0") }
					);
					console.log(this.liudong, VOTE_ADDR);
					loading.setMessage("处理中请等待...");
					// 等待tx落块，并至少1个区块确认:
					await tx.wait(1);
					showInfo("成功", "修改信息成功");
				} catch (e) {
					showAlert("错误", translateError(e));
				}
				loading.close();
			},
			// 第一个按钮结束
			accountChanged: function (accounts) {
				console.log(
					"wallet account changed:",
					accounts.length === 0 ? null : accounts[0]
				);
				if (accounts.length === 0) {
					this.disconnected();
				} else {
					this.account = accounts[0];
					document.cookie = "__account__=" + this.account + ";max-age=1296000";
				}
			},
			disconnected: async function () {
				console.warn("wallet disconnected.");
				this.account = null;
			},
			chainChanged: function (chainId) {
				console.log(
					"wallet chainId changed: " + chainId + " = " + parseInt(chainId, 16)
				);
				this.chainId = parseInt(chainId, 16);
			},
			connectWallet: async function () {
				console.log("try connect wallet...");
				if (window.getWeb3Provider() === null) {
					console.error("there is no web3 provider.");
					return false;
				}
				try {
					this.accountChanged(
						await window.ethereum.request({
							method: "eth_requestAccounts",
						})
					);
					this.chainChanged(
						await window.ethereum.request({
							method: "eth_chainId",
						})
					);
					window.ethereum.on("disconnect", this.disconnected);
					window.ethereum.on("accountsChanged", this.accountChanged);
					window.ethereum.on("chainChanged", this.chainChanged);
				} catch (e) {
					console.error("could not get a wallet connection.", e);
					return false;
				}
				console.log("wallet connected.");
				return true;
			},
		},
	});
}
